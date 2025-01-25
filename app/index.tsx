import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button } from '~/components/Button';
import image from '~/assets/images/med5.jpeg';
import { LinearGradient } from 'expo-linear-gradient';
import Smile from '~/assets/svgs/smile';
import SheildPlus from '~/assets/svgs/sheild_plus';
import TrafficCone from '~/assets/svgs/traffic_cone';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Reusable IconTextPair component
const IconTextPair = ({
  icon: Icon,
  text,
}: {
  icon: React.FC<{ color: string }>;
  text: string;
}) => {
  return (
    <View className="w-20 items-center justify-center">
      <View className="px-7 py-3">
        <Icon color="#fff" />
      </View>
      <Text className="text-center text-[13px] font-normal leading-[18px] -tracking-[0.08px] text-white">
        {text}
      </Text>
    </View>
  );
};

export default function RootIndex() {
  return (
    <ImageBackground className="flex-1" source={image} style={{ flex: 1 }}>
      {/* <StatusBar style="dark" animated/> */}
      {/* Gradient that starts dark from the bottom and fades upwards */}
      <LinearGradient
        colors={[
          'rgba(0,0,0,0.9)',
          'rgba(0,0,0,0.35)',
          'rgba(0,0,0,0.6)',
          'rgba(0,0,0,0.8)',
          'rgba(0,0,0,1)',
        ]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '100%',
        }}
      />

      <View className="m-4 flex-1 justify-between">
        <View />

        <View>
          <View className="items-center ">
            <Text className="text-large text-center">Ride in greater {'\n'} comfort</Text>
          </View>
          <View className="mb-3 flex-row justify-center gap-8">
            {/* Using IconTextPair component for each pair of icon and text */}
            <IconTextPair icon={SheildPlus} text={'Safe \nrides'} />
            <IconTextPair icon={Smile} text={'More bike \nrides'} />
            <IconTextPair icon={TrafficCone} text={'Better \nnavigation'} />
          </View>

          {/* Buttons */}
          <View className="mb-4 gap-3">
            <Button
              onPressOut={() => router.push('/onBoarding/loginWithNumber')}
              className="w-full bg-[#19363e]"
              title="Log in"
            />
            <Button
              onPressOut={() => router.push('/onBoarding')}
              className="w-full border border-[#32324A] bg-transparent"
              title="Sign up"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
