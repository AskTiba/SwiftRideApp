import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Information from '~/assets/svgs/info';
import Sparkles from '~/assets/svgs/sparkles';
// import { Info, Star } from "lucide-react-native";

export default function RideDetails() {
  return (
    <View className="h-[80%] justify-between px-5">
      <View className="">
        <View className="mt-3 flex-row items-center space-x-2">
          <Image
            className="h-16 w-16 rounded-full"
            source={require('~/assets/images/blonde.png')}
          />
          <View className="">
            <Text className="text-[17px] leading-[22px] tracking-[-0.43px] text-[#242424]">
              Name
            </Text>
            <Text className="text-[15px] leading-[20px] tracking-[-0.23px] text-[#616161]">
              Rider
            </Text>
            <Text className="flex-row items-center space-x-1">
              <View className="">
                <Sparkles color="#EAA300" width={16} height={16} />
              </View>{' '}
              <Text className="text-[13px] leading-[18px] tracking-[-0.08px] text-[#616161]">
                1.5
              </Text>
            </Text>
          </View>
        </View>
        <View className="mt-5 flex-row justify-between space-x-5">
          <View className="p-1">
            <Information className="" color="red" width={16} height={16} />
          </View>
          <Text className="text-[13px] leading-[18px] tracking-[-0.08px] text-[#616161]">
            This rider is time ⌛ minutes away from you thus {'\n'} will take sometime to reach your
            current {'\n'} location.
          </Text>
        </View>
      </View>

      <View className="">
        <Pressable
          onPress={() => {}}
          className="h-[52px] w-full items-center justify-center rounded-[99px] bg-[#636363]">
          <Text className="text-[17px] font-[600] leading-[22px] tracking-[-0.43px] text-white">
            Order ride
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
