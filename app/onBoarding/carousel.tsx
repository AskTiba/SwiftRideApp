import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
import { Stack } from 'expo-router';
import Slider from '~/components/Slider';

export default function Carousel() {
  return (
    <View className="flex-1 items-center justify-center">
      <Slider />
    </View>
  );
}
