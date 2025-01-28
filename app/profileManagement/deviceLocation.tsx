import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import Information from '~/assets/svgs/info';
import Toggle from '~/components/Toggle';

export default function DeviceLocation() {
  const [isToggleOn, setIsToggleOn] = useState(false);
  return (
    <View className="mx-4">
      <Stack.Screen options={{ headerTitle: 'Device location', headerTitleAlign: 'center' }} />
      <View className="mb-2 mt-2 flex-row gap-4 rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="mt-1">
          <Information width={16} height={16} color={'#FFF'} />
        </View>
        <Text className="text-tx">
          Enabling device location sharing enhances your {'\n'}experience.
        </Text>
      </View>
      <View className="flex-row justify-between rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="">
          <Text className="text-medium">Your device settings</Text>
          <Text className="text-tx">We have access to your device location.</Text>
        </View>
        <Toggle isOn={!isToggleOn} onToggle={() => setIsToggleOn(!isToggleOn)} />
      </View>
    </View>
  );
}
