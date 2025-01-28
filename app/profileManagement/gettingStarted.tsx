import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Rider from '~/assets/svgs/rider';

export default function GettingStarted() {
  return (
    <View className=''>
      <Stack.Screen
        options={{ headerTitle: 'Getting started with SwiftRide', headerTitleAlign: 'center' }}
      />
      <View className="mt-2 mx-auto">
        <Rider />
      </View>
    </View>
  );
}
