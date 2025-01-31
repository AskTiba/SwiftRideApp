import React from 'react';
import { Pressable, View } from 'react-native';
import { router } from 'expo-router';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Menu from '~/assets/svgs/menu';
import Bike from '~/assets/svgs/bike';

const FloatingButtons = ({ onMenuPress }: { onMenuPress: () => void }) => {
  const navigation = useNavigation();

  return (
    <>
      <Pressable
        onPress={() => router.push('./search_integrated')}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 transform">
        <View className="h-20 w-20 items-center justify-center rounded-full bg-[#19363e]">
          <Bike color="#fdd700" width={24} height={24} />
        </View>
      </Pressable>

      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        className="absolute left-5 top-10">
        <View className="items-center justify-center rounded-full bg-white p-4">
          <Menu color="#808080" width={24} height={24} />
        </View>
      </Pressable>
    </>
  );
};

export default FloatingButtons;
