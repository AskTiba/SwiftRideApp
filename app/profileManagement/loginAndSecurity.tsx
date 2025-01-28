import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import Toggle from '~/components/Toggle';
import Google from '~/assets/svgs/google';
import Apple from '~/assets/svgs/apple';

export default function LoginAndSecurity() {
  const [isGoggleToggleOn, setIsGoggleToggleOn] = useState(false);
  const [isAppleToggleOn, setIsAppleToggleOn] = useState(false);

  return (
    <View className="px-4">
      <Stack.Screen options={{ headerTitle: 'Login and security', headerTitleAlign: 'center' }} />
      <View className="mb-2 mt-2 flex-row items-center justify-between rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="flex-1 flex-row items-center gap-4">
          <Google width={40} height={40} color={'#FFF'} />
          <View className="">
            <Text className="text-medium">Goggle</Text>
            <Text className="text-tx">example@gmail.com </Text>
          </View>
        </View>
        <Toggle isOn={!isGoggleToggleOn} onToggle={() => setIsGoggleToggleOn(!isGoggleToggleOn)} />
      </View>
      <View className="flex-row items-center justify-between rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="flex-1 flex-row items-center gap-4">
          <Apple width={40} height={40} color={'#FFF'} />
          <View className="">
            <Text className="text-medium">Apple</Text>
            <Text className="text-tx">example@gmail.com </Text>
          </View>
        </View>
        <Toggle isOn={!isAppleToggleOn} onToggle={() => setIsAppleToggleOn(!isAppleToggleOn)} />
      </View>
    </View>
  );
}
