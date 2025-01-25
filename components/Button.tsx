import React, { forwardRef } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ActivityIndicator,
} from 'react-native';

type ButtonProps = {
  title?: string; // Button text
  loading?: boolean; // Show a loading spinner
  leftIcon?: React.ReactNode; // Icon on the left
  rightIcon?: React.ReactNode; // Icon on the right
  className?: string; // Parent-defined Tailwind styles
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(
  ({ title, loading, leftIcon, rightIcon, className, disabled, ...props }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        disabled={disabled || loading}
        className={[
          'flex-row items-center justify-center rounded-[99px] px-6 py-4 shadow-lg', // Default styles
          disabled ? 'bg-[#170e05] text-gray-500' : 'bg-[#19363e]', // Background color and state handling
          'active:opacity-25', // Active state effect
          className, // Allow parent styles
        ].join(' ')}
        {...props}>
        {/* Loading Spinner */}
        {loading && (
          <ActivityIndicator
            color={disabled ? '#9CA3AF' : '#FFFFFF'}
            style={{ marginRight: leftIcon ? 8 : 0 }}
          />
        )}

        {/* Left Icon */}
        {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}

        {/* Button Text */}
        {title && (
          <Text
            className="text-center text-base font-semibold text-white"
            style={{ fontSize: 16, fontWeight: '600' }}>
            {title}
          </Text>
        )}

        {/* Right Icon */}
        {rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
      </TouchableOpacity>
    );
  }
);
