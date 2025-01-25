import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import LeftChevron from '~/assets/svgs/left_chevron';

export default function ProfileManagementLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontSize: 28,
          fontWeight: 700,
        },
        headerLeft: () => (
          <TouchableOpacity onPressOut={() => router.back()}>
            <LeftChevron color={'#fff'} />
          </TouchableOpacity>
        ),
      }}>
      {/* <Stack.Screen name="index" options={{ headerShown: true }} /> */}
    </Stack>
  );
}
