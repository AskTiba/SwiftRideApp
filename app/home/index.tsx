import React, { useState, useEffect } from 'react';
import { SafeAreaView, ActivityIndicator, Text, View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import * as Location from 'expo-location';
import MenuModal from '~/components/MenuModal';
import MapContent from '~/components/MapContent';

const MapboxComponent = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fetch user location
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

  // Show loading or error state if location is not available
  if (!location) {
    return (
      <SafeAreaView className="h-full w-full bg-[#FFFFFF] pt-3">
        <Stack.Screen options={{ headerShown: false }} />
        <View className="flex-1 items-center justify-center">
          {errorMsg ? <Text>{errorMsg}</Text> : <ActivityIndicator size="large" color="#00ff00" />}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <MapContent location={location} onMenuPress={() => setIsMenuOpen(true)} />
      <MenuModal isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </View>
  );
};

export default MapboxComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
