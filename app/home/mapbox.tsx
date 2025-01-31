import React, { useEffect, useState, useRef } from 'react';
import { StatusBar, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Mapbox, { MapView, Camera, UserLocation } from '@rnmapbox/maps';
import { Stack } from 'expo-router';
import * as Location from 'expo-location'; // Import expo-location
import Bubble from '~/components/Bubble';
import FloatingButtons from '~/components/FloatingButtons';

// Set Mapbox access token
Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PUBLIC_KEY || '');

const MapBoxScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const mapRef = useRef<MapView>(null); // Ref for MapView
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cameraRef = useRef<Camera>(null); // Ref for Camera

  // Fetch user location using expo-location
  useEffect(() => {
    (async () => {
      // Request permission to access location
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      // Get the current location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // Zoom to user location once it's available
  useEffect(() => {
    if (location) {
      setTimeout(() => {
        cameraRef.current?.setCamera({
          centerCoordinate: [location.coords.longitude, location.coords.latitude],
          zoomLevel: 14, // Adjust zoom level for user location
          animationDuration: 2500, // Smooth zoom-in effect
        });
      }, 2000); // Delay zoom-in for 2s to let user see the globe
    }
  }, [location]);

  // Show loading or error state if location is not available
  if (!location) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <StatusBar barStyle={'dark-content'} translucent backgroundColor="transparent" />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {errorMsg ? <Text>{errorMsg}</Text> : <ActivityIndicator size="large" color="#00ff00" />}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle={'dark-content'} translucent backgroundColor="transparent" />

      <MapView
        ref={mapRef} // Assign ref to MapView
        logoEnabled={false}
        scaleBarEnabled={false}
        attributionEnabled={false}
        compassViewPosition={3}
        compassFadeWhenNorth
        projection="globe" // Starts with the global view
        // styleURL="mapbox://styles/mapbox/dark-v11"
        style={styles.map}>
        {/* Handles initial globe view and zooms to user */}
        <Camera
          ref={cameraRef} // Assign ref to Camera separately
          zoomLevel={0}
          centerCoordinate={[0, 0]}
        />
        {/* Display user location on the map */}
        <UserLocation
          showsUserHeadingIndicator
          visible={true}
          onUpdate={(loc) => {
            // Handle Mapbox.Location object separately
            // console.log('Mapbox Location:', loc);
          }}
        />
      </MapView>

      {/* Display user location data */}
      <Bubble>
        {location && (
          <>
            {/* <Text>Heading: {location.coords.heading}</Text> */}
            <Text>Longitude: {location.coords.longitude}</Text>
            <Text>Latitude: {location.coords.latitude}</Text>
            {/* <Text>Altitude: {location.coords.altitudeAccuracy}</Text> */}
            <Text>Altitude: {location.coords.altitude}</Text>
            <Text>Accuracy: {location.coords.accuracy}</Text>
            <Text>Speed: {location.coords.speed}</Text>
          </>
        )}
      </Bubble>

      <FloatingButtons onMenuPress={() => setIsMenuOpen(true)} />
    </View>
  );
};

export default MapBoxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
