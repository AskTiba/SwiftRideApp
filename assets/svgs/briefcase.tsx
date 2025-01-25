import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';
const Briefcase = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-briefcase-business"
    {...props}>
    <Path d="M12 12h.01" />
    <Path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <Path d="M22 13a18.15 18.15 0 0 1-20 0" />
    <Rect width={20} height={14} x={2} y={6} rx={2} />
  </Svg>
);
export default Briefcase;
