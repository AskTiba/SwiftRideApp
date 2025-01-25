import * as React from 'react';
import Svg, { Path, Circle, Polyline, SvgProps } from 'react-native-svg';
const UserCheck = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-user-check"
    {...props}>
    <Path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <Circle cx={9} cy={7} r={4} />
    <Polyline points="16 11 18 13 22 9" />
  </Svg>
);
export default UserCheck;
