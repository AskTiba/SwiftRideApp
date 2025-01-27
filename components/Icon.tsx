// components/Icon.tsx
import React from 'react';
import { Svg, SvgProps, Path } from 'react-native-svg';

interface IconProps extends SvgProps {
  color?: string;
  size?: number;
  children: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ color = 'currentColor', size = 24, children, ...props }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      {children}
    </Svg>
  );
};

export default Icon;
