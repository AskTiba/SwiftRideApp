import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Phone from '~/assets/svgs/phone';
import RightChevron from '~/assets/svgs/right_chevron';
import Sparkles from '~/assets/svgs/sparkles';
import Wallet from '~/assets/svgs/wallet';
import { router, Stack } from 'expo-router';

export default function HelpCentre() {
  return (
    <View className="gap-2 px-4">
      <Stack.Screen options={{ headerTitle: 'Help centre', headerTitleAlign: 'center' }} />
      <TouchableOpacity
        onPress={() => router.push('/profileManagement/gettingStarted')}
        className="mt-2 flex-row items-center justify-between rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="flex-1 flex-row items-center gap-4">
          <Sparkles color={'#FFF'} />
          <View className="">
            <Text className="text-medium">Getting started with SwiftRide</Text>
            <Text className="text-tx">An introduction to how the app works</Text>
          </View>
        </View>
        <RightChevron color={'#FFF'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push('/profileManagement/paying')}
        className="flex-row items-center justify-between rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="flex-1 flex-row items-center gap-4">
          <Wallet color={'#FFF'} />
          <View className="">
            <Text className="text-medium">Paying for your trip</Text>
            <Text className="text-tx">Find out how we price our rides</Text>
          </View>
        </View>
        <RightChevron color={'#FFF'} />
      </TouchableOpacity>
    </View>
  );
}
