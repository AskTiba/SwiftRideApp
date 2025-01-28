import { View, Text } from 'react-native';
import React from 'react';
import Payment from '~/assets/svgs/paying';
import { Stack } from 'expo-router';

export default function Paying() {
  return (
    <View className="">
      <Stack.Screen options={{ headerTitle: 'Paying', headerTitleAlign: 'center' }} />
      <View className="mx-auto mt-2">
        <Payment />
      </View>
    </View>
  );
}
