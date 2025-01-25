import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const MoveRight = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-move-right"
    {...props}>
    <Path d="M18 8L22 12L18 16" />
    <Path d="M2 12H22" />
  </Svg>
);
export default MoveRight;
