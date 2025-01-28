import { View, Text } from 'react-native';
import React, { useState, useCallback } from 'react';
import { Stack } from 'expo-router';
import Information from '~/assets/svgs/info';
import Checkbox from '~/components/checkbox';
import RadioButton from '~/components/RadioButton';

// Reusable Card Component
const Card = ({ children }: { children: React.ReactNode }) => (
  <View className="rounded-lg bg-[#171c1f] px-4 py-2">{children}</View>
);

// Reusable Section Title Component
const SectionTitle = ({ title }: { title: string }) => (
  <Text className="text-medium mb-2 mt-4 px-4">{title}</Text>
);

export default function Communication() {
  // State for radio buttons
  const [selectedOption, setSelectedOption] = useState<number>(1);

  // State for checkboxes
  const [checkboxes, setCheckboxes] = useState({
    recommendations: false,
    promotionalOffers: false,
    productNews: false,
  });

  // Handle radio button selection
  const handleRadioPress = useCallback((option: number) => {
    setSelectedOption(option);
  }, []);

  // Handle checkbox toggle
  const handleCheckboxPress = useCallback((key: keyof typeof checkboxes) => {
    setCheckboxes((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  // Radio button options
  const radioOptions = [
    { id: 1, label: 'Calls', isRecommended: true },
    { id: 2, label: 'Chat' },
    { id: 3, label: 'Call or chat' },
  ];

  // Checkbox options
  const checkboxOptions: {
    key: keyof typeof checkboxes;
    label: string;
    description: string;
  }[] = [
    {
      key: 'recommendations',
      label: 'Recommendations',
      description: 'Custom trip recommendations',
    },
    {
      key: 'promotionalOffers',
      label: 'Promotional offers',
      description: 'Special offers, discounts, and bonuses.',
    },
    {
      key: 'productNews',
      label: 'Product news & updates',
      description: 'Exciting product updates and news.',
    },
  ];

  return (
    <View className="px-4">
      {/* Header */}
      <Stack.Screen options={{ headerTitle: 'Communication', headerTitleAlign: 'center' }} />

      {/* Information Section */}
      <View className="mb-2 mt-2 flex-row gap-4 rounded-lg bg-[#171c1f] px-4 py-2">
        <View className="mt-1">
          <Information width={16} height={16} color={'#FFF'} />
        </View>
        <Text className="text-tx">
          Select how drivers can contact you during trips {'\n'}and how you'd like to receive
          special offers, {'\n'}promotions, and more.
        </Text>
      </View>

      {/* Driver Preferences Section */}
      <SectionTitle title="Driver preferences" />
      <View className="gap-2">
        {radioOptions.map((option) => (
          <Card key={option.id}>
            <View className="flex-row justify-between">
              <View className="flex-1 flex-row gap-4">
                <RadioButton
                  checked={selectedOption === option.id}
                  onPress={() => handleRadioPress(option.id)}
                />
                <Text className="text-medium font-normal">{option.label}</Text>
              </View>
              {option.isRecommended && <Text className="text-sub text-[#32cd32]">Recommended</Text>}
            </View>
          </Card>
        ))}
      </View>

      {/* Push Notifications Section */}
      <SectionTitle title="Push notifications" />
      <View className="gap-2">
        {checkboxOptions.map((option) => (
          <View key={option.key} className="flex-row rounded-lg bg-[#171c1f] px-4 py-2">
            <View className="flex-1 flex-row items-center gap-4">
              <Checkbox
                checked={checkboxes[option.key]}
                onValueChange={() => handleCheckboxPress(option.key)}
              />
              <View>
                <Text className="text-medium">{option.label}</Text>
                <Text className="text-tx">{option.description}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
