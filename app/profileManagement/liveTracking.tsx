import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import Information from '~/assets/svgs/info';
import Toggle from '~/components/Toggle';

export default function LiveTracking() {
  const [isDriverToggleOn, setIsDriverToggleOn] = useState(true);
  const [isContactsToggleOn, setIsContactsToggleOn] = useState(true);
  return (
    <View className="px-4">
      <Stack.Screen options={{ headerTitle: 'Live location', headerTitleAlign: 'center' }} />
      <View className="mb-2 mt-2 flex-row gap-4 rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="mt-1">
          <Information width={16} height={16} color={'#FFF'} />
        </View>
        <Text className="text-tx">
          We share your live location in specific scenarios {'\n'}to enhance your experience.
        </Text>
      </View>
      <View className="mb-2 flex-row justify-between rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="">
          <Text className="text-medium">Share with driverss</Text>
          <Text className="text-tx">
            Drivers can view your location 3 minutes {'\n'}before pickup to locate you more quickly.
          </Text>
        </View>
        <Toggle isOn={!isDriverToggleOn} onToggle={() => setIsDriverToggleOn(!isDriverToggleOn)} />
      </View>
      <View className="flex-row justify-between rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="">
          <Text className="text-medium">Share with select contacts</Text>
          <Text className="text-tx">
            Share your trip status with your friends or {'\n'}family for safer trips.
          </Text>
        </View>
        <Toggle
          isOn={!isContactsToggleOn}
          onToggle={() => setIsContactsToggleOn(!isContactsToggleOn)}
        />
      </View>
    </View>
  );
}
