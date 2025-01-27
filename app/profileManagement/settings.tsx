import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import Toggle from '~/components/Toggle';
import ListItem from '~/components/ListItem';
import Notification from '~/assets/svgs/notification';
import Notifications from '~/assets/svgs/notifications';
import BellRing from '~/assets/svgs/bell_ring';
import Lock from '~/assets/svgs/lock';
import RightChevron from '~/assets/svgs/right_chevron';
import Phone from '~/assets/svgs/phone';
import SunMoon from '~/assets/svgs/sun_moon';

export default function Settings() {
  const [isToggleOn, setIsToggleOn] = useState(false);
  return (
    <View className="px-4">
      <Stack.Screen options={{ headerTitle: 'Settings', headerTitleAlign: 'center' }} />
      <View className="">
        <View className="mb-2 mt-2 flex-row items-center justify-between rounded-lg bg-[#171c1f] px-4 py-2">
          <View className="flex-1 flex-row items-center gap-4">
            <BellRing color={'#FFF'} />
            <View className="">
              <Text className="text-medium">Notifications</Text>
              <Text className="text-tx">
                This allows us to send you promos,{'\n'} deals among things
              </Text>
            </View>
          </View>
          <Toggle isOn={!isToggleOn} onToggle={() => setIsToggleOn(!isToggleOn)} />
        </View>
        <TouchableOpacity className="mb-2 flex-row items-center justify-between rounded-lg bg-[#171c1f] px-4 py-2">
          <View className="flex-1 flex-row items-center gap-4">
            <Lock color={'#FFF'} />
            <View className="">
              <Text className="text-medium">Privacy</Text>
              <Text className="text-tx">Manage the data you share with us </Text>
            </View>
          </View>
          <RightChevron color={'#FFF'} />
        </TouchableOpacity>
        <TouchableOpacity className="mb-2 flex-row items-center justify-between rounded-lg bg-[#171c1f] px-4 py-2">
          <View className="flex-1 flex-row items-center gap-4">
            <SunMoon color={'#FFF'} />
            <View className="">
              <Text className="text-medium">Appearance</Text>
              <Text className="text-tx">Select how you want your app to look like</Text>
            </View>
          </View>
          <RightChevron color={'#FFF'} />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between rounded-lg bg-[#171c1f] px-4 py-2">
          <View className="flex-1 flex-row items-center gap-4">
            <Phone color={'#FFF'} />
            <View className="">
              <Text className="text-medium">Communication</Text>
              <Text className="text-tx">Select your preferred contact methods.</Text>
            </View>
          </View>
          <RightChevron color={'#FFF'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}