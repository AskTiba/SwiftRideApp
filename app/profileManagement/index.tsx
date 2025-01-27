import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router, Stack } from 'expo-router';
import { Items } from '~/data/Settings';
import UserRound from '~/assets/svgs/user_round';
import RightChevron from '~/assets/svgs/right_chevron';

type ListItemProps = {
  text: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onPress?: () => void;
  center?: boolean;
};

const ListItem: React.FC<ListItemProps> = ({ text, leftIcon, rightIcon, onPress, center }) => (
  <TouchableOpacity
    accessibilityRole="button"
    accessibilityLabel={text}
    onPress={onPress}
    className={`${
      center
        ? 'items-center justify-center py-3'
        : 'flex-row items-center justify-between px-4 py-3'
    } mb-2 rounded-lg bg-[#171c1f]`}>
    <View className="flex-row items-center gap-4">
      {leftIcon}
      <Text className="text-medium text-white">{text}</Text>
    </View>
    {rightIcon}
  </TouchableOpacity>
);

const handleItemPress = (text: string) => {
  switch (text) {
    case 'Settings':
      router.push('/profileManagement/settings');
      break;
    case 'Login and security':
      router.push('/profileManagement/loginAndSecurity');
      break;
    case 'Visit help centre':
      router.push('/profileManagement/helpCentre');
      break;
    case 'Give us feedback':
      router.push('/profileManagement/feedback');
      break;
    case 'Safety & support':
      router.push('/profileManagement/safetyAndSupport');
      break;
    case 'Legal':
      router.push('/profileManagement/legal');
      break;
    case 'About':
      router.push('/profileManagement/about');
      break;
    case 'Logout':
      console.log('Logout pressed');
      break;
    default:
      console.log('No route defined for:', text);
  }
};

const ProfileScreen: React.FC = () => {
  return (
    <View className="px-4">
      <Stack.Screen
        options={{
          headerTitle: 'Profile',
          headerTitleStyle: {
            fontSize: 28,
            fontWeight: '700',
          },
        }}
      />

      <TouchableOpacity onPress={() => router.push('/profileManagement/accountInfo')}>
        <View className="mt-4 items-center">
          <View className="h-24 w-24 items-center justify-center rounded-full bg-[#171c1f]">
            <UserRound />
          </View>
        </View>
        <View className="mb-2 mt-3 flex-row items-center justify-between px-4">
          <View>
            <Text className="text-medium text-white">Name</Text>
            <Text className="text-sub text-gray-400">Phone Number</Text>
            <Text className="text-tx text-gray-400">Email</Text>
          </View>
          <RightChevron color={'#FFF'} />
        </View>
      </TouchableOpacity>

      <Text className="text-medium my-4 px-4 text-white">App Settings</Text>
      <View>
        {Items.map((item) => (
          <ListItem
            key={item.id}
            text={item.text}
            leftIcon={item.leftIcon}
            rightIcon={item.rightIcon}
            center={item.center}
            onPress={() => handleItemPress(item.text)}
          />
        ))}
      </View>
    </View>
  );
};

export default ProfileScreen;
