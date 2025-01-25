import * as React from 'react';
import Svg, { Path, Line, SvgProps } from 'react-native-svg';
const BadgeInfo = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-badge-info"
    {...props}>
    <Path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <Line x1={12} x2={12} y1={16} y2={12} />
    <Line x1={12} x2={12.01} y1={8} y2={8} />
  </Svg>
);
export default BadgeInfo;
