import { View, Text } from 'react-native';
import React from 'react';

interface BubbleProps {
  children: React.ReactNode;
  className?: string;
}

const Bubble: React.FC<BubbleProps> = ({ children, className }) => {
  return (
    <View className={`absolute right-2 top-7 rounded-lg bg-white p-4 shadow-md ${className || ''}`}>
      {children}
    </View>
  );
};

export default Bubble;
