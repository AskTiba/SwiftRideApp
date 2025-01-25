import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
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
  containerStyle?: object;
  textStyle?: object;
  rightTextStyle?: object;
  pressableStyle?: object;

  // Functional props
  iconColor?: string;
  showToggle?: boolean;
  disabled?: boolean;

  // Spacing & alignment
  gap?: number;

  // Callbacks
  onPress?: () => void;
  onToggle?: (isExpanded: boolean) => void;

  // Accessibility
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  leftIcon,
  rightIcon,
  text,
  rightText,
  containerStyle = {},
  textStyle = {},
  rightTextStyle = {},
  pressableStyle = {},
  iconColor = '#fdd700',
  showToggle = false,
  disabled = false,
  gap = 12,
  onPress,
  onToggle,
  accessibilityLabel,
  accessibilityHint,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    if (disabled) return;
    if (showToggle) {
      setIsExpanded(!isExpanded);
      onToggle?.(!isExpanded);
    }
    onPress?.();
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={[styles.pressable, { opacity: disabled ? 0.6 : 1 }, pressableStyle]}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}>
      <View style={[styles.container, containerStyle]}>
        {/* Left section */}
        <View style={[styles.leftSection, { gap }]}>
          {leftIcon || <User color={iconColor} />}
          {text && <Text style={[styles.text, { color: iconColor }, textStyle]}>{text}</Text>}
        </View>

        {/* Right section */}
        <View style={[styles.rightSection, { gap }]}>
          {rightText && (
            <Text style={[styles.rightText, { color: iconColor }, rightTextStyle]}>
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

const styles = StyleSheet.create({
  pressable: {
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#fdd700',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  rightText: {
    fontSize: 14,
    fontWeight: '300',
  },
});

export default ListItem;
