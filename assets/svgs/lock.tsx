import * as React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';
const Lock = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-lock"
    {...props}>
    <Rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
    <Path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Svg>
);
export default Lock;
