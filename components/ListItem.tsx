import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import DownChevron from '~/assets/svgs/down_chevron';
import UpChevron from '~/assets/svgs/up_chevron';
import User from '~/assets/svgs/user';

interface ListItemProps {
  // Content props
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text?: string;
  rightText?: string;

  // Styling props
  iconColor?: string;

  // Functional props
  showToggle?: boolean;
  disabled?: boolean;
  gap?: number;

  // Callbacks
  onPress?: () => void;
  onToggle?: (isExpanded: boolean) => void;

  // Accessibility
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: 'button' | 'link' | 'none';
}

const ListItem: React.FC<ListItemProps> = ({
  leftIcon,
  rightIcon,
  text,
  rightText,
  iconColor = '#fdd700',
  showToggle = false,
  disabled = false,
  gap = 12,
  onPress,
  onToggle,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = 'button',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    if (disabled) return;
    if (showToggle) {
      const newState = !isExpanded;
      setIsExpanded(newState);
      onToggle?.(newState);
    }
    onPress?.();
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      className={`rounded-lg border p-3 ${
        disabled ? 'opacity-60' : 'opacity-100'
      } active:opacity-80`}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole}>
      <View className="flex-row items-center justify-between">
        {/* Left section */}
        <View style={{ gap }} className="flex-row items-center">
          {leftIcon || <User color={iconColor} />}
          {text && (
            <Text className={`text-base font-medium`} style={{ color: iconColor }}>
              {text}
            </Text>
          )}
        </View>

        {/* Right section */}
        <View style={{ gap }} className="flex-row items-center">
          {rightText && (
            <Text className={`text-sm font-light`} style={{ color: iconColor }}>
              {rightText}
            </Text>
          )}
          {showToggle ? (
            isExpanded ? (
              <UpChevron color={iconColor} />
            ) : (
              <DownChevron color={iconColor} />
            )
          ) : (
            rightIcon
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default React.memo(ListItem);
