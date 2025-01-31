import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import RightChevron from '~/assets/svgs/right_chevron';
import Banknote from '~/assets/svgs/banknote';
import SheildPlus from '~/assets/svgs/sheild_plus';
import HeartHandshake from '~/assets/svgs/heart_handshake';
import MessageDot from '~/assets/svgs/message_square_dot';
import Scale from '~/assets/svgs/scale';
import Information from '~/assets/svgs/info';
import Cog from '~/assets/svgs/cog';
import UserRound from '~/assets/svgs/user_round';

export default function MenuContent({ navigation }: DrawerContentComponentProps) {
  return (
    <SafeAreaView className="px-5">
      {/* Profile Section */}
      <TouchableOpacity
        onPress={() => navigation.navigate('profileManagement')}
        className="mt-10 flex-row items-center space-x-3">
        <View className="h-14 w-14 items-center justify-center rounded-full bg-[#19363e]">
          <UserRound />
        </View>
        <View className="">
          <View className="flex-row items-center space-x-1">
            <Text className="text-[17px] font-[600] leading-[22px] tracking-[-0.43px] ">
              Username
            </Text>
            <RightChevron color="#242424" width={20} height={20} />
          </View>
          <Text className="text-[15px] leading-[20px] tracking-[-0.23px] text-[#616161]">
            Account centre
          </Text>
        </View>
      </TouchableOpacity>

      {/* Menu Items */}
      <View className="my-5 space-y-6 ">
        <TouchableOpacity
          onPress={() => navigation.navigate('payments')}
          className="flex-row items-center space-x-5">
          <Banknote color="#242424" width={20} height={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('settings')}
          className="flex-row items-center space-x-5">
          <Cog color="#242424" width={20} height={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('loginSecurity')}
          className="flex-row items-center space-x-5">
          <SheildPlus color="#242424" width={20} height={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">Log in and security</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('help')}
          className="flex-row items-center space-x-5">
          <HeartHandshake color="#242424" width={20} height={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">Help</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('feedback')}
          className="flex-row items-center space-x-5">
          <MessageDot color="#242424" width={20} height={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">Give us feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('legal')}
          className="flex-row items-center space-x-5">
          <Scale color="#242424" width={20} height={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">Legal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('about')}
          className="flex-row items-center space-x-5">
          <Information color="#242424" width={20} height={20} />
          <Text className="text-[17px] leading-[22px] tracking-[-0.43px]">About</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}