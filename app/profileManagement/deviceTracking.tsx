import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Information from '~/assets/svgs/info';

export default function DeviceTracking() {
  return (
    <View className="mx-4">
      <Stack.Screen options={{ headerTitle: 'Device tracking', headerTitleAlign: 'center' }} />
      <View className="mb-2 mt-2 flex-row gap-4 rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="mt-1">
          <Information width={16} height={16} color={'#FFF'} />
        </View>
        <Text className="text-tx">
          To ensure your journey is safe and fast, we {'\n'}collect and use data at every stage of
          your trip. {'\n'}This includes before you start, while you're on {'\n'}your way, and after
          you've arrived at your {'\n'}destination.
        </Text>
      </View>
      <View className="mb-2 rounded-lg bg-[#171c1f] px-4 py-2">
        <Text className="text-medium">Your location</Text>
        <Text className="text-tx">
          We use your current location to create more efficient {'\n'}routes for your journey.
        </Text>
      </View>
      <View className="mb-2 rounded-lg bg-[#171c1f] px-4 py-2">
        <Text className="text-medium">Trip details</Text>
        <Text className="text-tx">
          We use this data in emergency situations, including {'\n'}your name, phone number, and
          other relevant {'\n'}information.{' '}
        </Text>
      </View>
      <View className="rounded-lg bg-[#171c1f] px-4 py-2">
        <Text className="text-medium">Payment information</Text>
        <Text className="text-tx">
          We collect and securely store data about your credit {'\n'}cards and mobile money.
        </Text>
      </View>
    </View>
  );
}
