import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import Toggle from '~/components/Toggle';

export default function Appearance() {
  // State to track the currently active toggle
  const [activeMode, setActiveMode] = useState<'light' | 'dark' | 'device'>('light');

  return (
    <View className="px-4">
      {/* Screen Header */}
      <Stack.Screen options={{ headerTitle: 'Appearance', headerTitleAlign: 'center' }} />

      {/* Light Mode Toggle */}
      <View className="mt-2 flex-row justify-between rounded-lg bg-[#171c1f] px-4 py-2">
        <Text className="text-medium">Light mode</Text>
        <Toggle isOn={activeMode === 'light'} onToggle={() => setActiveMode('light')} />
      </View>

      {/* Dark Mode Toggle */}
      <View className="mt-2 flex-row justify-between rounded-lg bg-[#171c1f] px-4 py-2">
        <Text className="text-medium">Dark mode</Text>
        <Toggle isOn={activeMode === 'dark'} onToggle={() => setActiveMode('dark')} />
      </View>

      {/* Device Settings Toggle */}
      <View className="mt-2 flex-row justify-between rounded-lg bg-[#171c1f] px-4 py-2">
        <View>
          <Text className="text-medium">Use device settings</Text>
          <Text className="text-tx">The app will adapt to your device's display {'\n'}theme.</Text>
        </View>
        <Toggle isOn={activeMode === 'device'} onToggle={() => setActiveMode('device')} />
      </View>
    </View>
  );
}
