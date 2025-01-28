import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import RightChevron from '~/assets/svgs/right_chevron';
import Shapes from '~/assets/svgs/shapes';
import Radio from '~/assets/svgs/radio';
import MapPin from '~/assets/svgs/mapPin';

export default function PrivacyCentre() {
  return (
    <View className="px-4">
      <Stack.Screen options={{ headerTitle: 'Privacy centre', headerTitleAlign: 'center' }} />
      <TouchableOpacity
        onPress={() => router.push('/profileManagement/deviceTracking')}
        className="my-2 flex-row items-center justify-between rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="flex-1 flex-row items-center gap-4">
          <Shapes color={'#FFF'} />
          <View className="">
            <Text className="text-medium">Data tracking</Text>
            <Text className="text-tx">Discover the types of data we collect</Text>
          </View>
        </View>
        <RightChevron color={'#FFF'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push('/profileManagement/deviceLocation')}
        className="mb-2 flex-row items-center justify-between rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="flex-1 flex-row items-center gap-4">
          <MapPin color={'#FFF'} />
          <View className="">
            <Text className="text-medium">Device location</Text>
            <Text className="text-tx">Check if we can access your location</Text>
          </View>
        </View>
        <RightChevron color={'#FFF'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push('/profileManagement/liveTracking')}
        className="flex-row items-center justify-between rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="flex-1 flex-row items-center gap-4">
          <Radio color={'#FFF'} />
          <View className="">
            <Text className="text-medium">Live location</Text>
            <Text className="text-tx">
              How we share your location in real-time {'\n'}with others
            </Text>
          </View>
        </View>
        <RightChevron color={'#FFF'} />
      </TouchableOpacity>
    </View>
  );
}
