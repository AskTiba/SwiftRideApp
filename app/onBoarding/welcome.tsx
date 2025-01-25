import { View, Text } from 'react-native';
import React from 'react';
import Briefcase from '~/assets/svgs/briefcase';
import Bike from '~/assets/svgs/bike';
import UserCheck from '~/assets/svgs/user_check';
import { features } from '~/data/Settings';
import { Button } from '~/components/Button';

type FeatureItemProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <View className="flex-row items-center gap-4 py-3">
    <View className="rounded-full bg-[#171C1F] p-2">{icon}</View>
    <View>
      <Text className="text-medium">{title}</Text>
      <Text className="text-tx">{description}</Text>
    </View>
  </View>
);

export default function Welcome() {
  return (
    <View className="flex-1 justify-between p-4">
      <View className="px-4">
        {/* Welcome Heading */}
        <Text className="text-heading">Welcome to SwiftRide</Text>
        <Text className="text-tx mb-10 mt-2">
          We can't wait for you to try out some of our exciting features
        </Text>
        {/* Features List */}
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </View>
      <Button className='mb-6' title="Let's go" />
    </View>
  );
}
