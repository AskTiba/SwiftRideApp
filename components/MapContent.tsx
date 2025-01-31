import React, { useRef, useEffect, useState } from 'react';
import { View, Pressable } from 'react-native';
import Mapbox, { Camera, CircleLayer, Images, ShapeSource, SymbolLayer } from '@rnmapbox/maps';
import { router } from 'expo-router';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { featureCollection, point } from '@turf/helpers';
import bikes from '~/data/bikes.json';
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import BottomSheetHeader from './BottomSheetHeader';
import FloatingButtons from './FloatingButtons';
import RideDetailsBottomSheet from './RideDetailsBottomSheet';

// Set the Mapbox access token
Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PUBLIC_KEY || '');

const MapContent = ({
  location,
  onMenuPress,
}: {
  location: Location.LocationObject;
  onMenuPress: () => void;
}) => {
  const rideSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['40%'];
  const [isRideDetailsOpen, setIsRideDetailsOpen] = useState(false);

  const handleRideDetailsPress = (index: number) => {
    rideSheetRef.current?.snapToIndex(index);
    setIsRideDetailsOpen(true);
  };

  const points = bikes.map((bike) => point([bike.longitude, bike.latitude]));
  const pin = require('~/assets/images/pin.png');
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center">
      <View className="h-full w-full">
        <Mapbox.MapView
          projection="globe"
          scaleBarEnabled={false}
          compassFadeWhenNorth
          compassEnabled={true}
          compassViewPosition={3}
          attributionEnabled={false}
          className="h-full w-full">
          {location && (
            <>
              <Camera
                centerCoordinate={[location.coords.longitude, location.coords.latitude]}
                zoomLevel={13}
                followZoomLevel={14}
                followUserLocation
                animationDuration={9000}
              />
              <ShapeSource
                onPress={() => handleRideDetailsPress(0)}
                id="bikes"
                cluster
                shape={featureCollection(points)}>
                <SymbolLayer
                  id="bike-icons"
                  minZoomLevel={0.5}
                  style={{
                    iconImage: 'pin',
                    iconAllowOverlap: true,
                    iconSize: 0.4,
                    iconAnchor: 'bottom',
                  }}
                />
                <CircleLayer
                  id="clusters"
                  belowLayerID="pointCount"
                  filter={['has', 'point_count']}
                  style={{
                    circlePitchAlignment: 'map',
                    circleColor: '#AF52DE',
                    circleRadius: 20,
                    circleOpacity: 0.7,
                    circleStrokeWidth: 2,
                    circleStrokeColor: 'white',
                  }}
                />
                <Images images={{ pin }} />
              </ShapeSource>
            </>
          )}
        </Mapbox.MapView>
      </View>

      <FloatingButtons onMenuPress={onMenuPress} />
      {isRideDetailsOpen && (
        <RideDetailsBottomSheet
          rideSheetRef={rideSheetRef}
          snapPoints={snapPoints}
          onClose={() => setIsRideDetailsOpen(false)}
        />
      )}
    </View>
  );
};

export default MapContent;
