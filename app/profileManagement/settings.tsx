import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function Settings() {
  return (
    <View>
      <Stack.Screen options={{ headerTitle: 'Settings', headerTitleAlign: 'center' }} />

      <Text>Settings</Text>
    </View>
  );
}
