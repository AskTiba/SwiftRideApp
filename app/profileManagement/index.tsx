import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { Items } from '~/data/Settings';
import UserRound from '~/assets/svgs/user_round';

type ListItemProps = {
  text: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onPress?: () => void;
  center?: boolean;
};
const ListItem: React.FC<ListItemProps> = ({ text, leftIcon, rightIcon, onPress, center }) => (
  <TouchableOpacity
    className={`${
      center
        ? 'items-center justify-center py-3'
        : 'flex-row items-center justify-between px-4 py-3'
    }  border-b-[0.5px] border-[#F19363E]`}
    onPress={onPress}
    accessibilityLabel={text}>
    <View className="flex-row items-center gap-4">
      {leftIcon}
      <Text className="text-medium text-white">{text}</Text>
    </View>
    {rightIcon}
  </TouchableOpacity>
);

export default function ProfileScreen() {
  return (
    <View className="px-4">
      {/* Header */}
      <Stack.Screen options={{ headerTitle: 'Profile' }} />

      {/* Profile Picture */}
      <TouchableOpacity className="mt-4 items-center">
        <View className="h-24 w-24 items-center justify-center rounded-full bg-[#171c1f]">
          <UserRound />
        </View>
      </TouchableOpacity>

      {/* User Info */}
      <View className="mb-2 mt-3 px-4">
        <Text className="text-medium text-white">Name</Text>
        <Text className="text-sub text-gray-400">Phone Number</Text>
        <Text className="text-tx text-gray-400">Email</Text>
      </View>

      {/* App Settings Section */}
      <Text className="text-medium my-4 px-4 text-white">App Settings</Text>
      <View className="rounded-lg bg-[#171c1f]">
        {Items.map((item, index) => (
          <ListItem
            key={index}
            text={item.text}
            leftIcon={item.leftIcon}
            rightIcon={item.rightIcon}
            center={item.center}
            onPress={() => console.log(`Pressed ${item.text}`)}
          />
        ))}
      </View>
    </View>
  );
}
