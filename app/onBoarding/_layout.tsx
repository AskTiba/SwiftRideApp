import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import Smile from '~/assets/svgs/smile';
import LeftChevron from '~/assets/svgs/left_chevron';

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: 'Sign up',
        animation: 'slide_from_left',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity onPressOut={() => router.back()}>
            <LeftChevron color={'#fff'} />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen options={{ headerTitle: 'Log in' }} name="loginWithNumber" />
      <Stack.Screen options={{ headerTitle: 'Log in' }} name="loginCode" />
      <Stack.Screen options={{ headerTitle: '' }} name="carousel" />
      <Stack.Screen options={{ headerTitle: '' }} name="welcome" />
    </Stack>
  );
}
