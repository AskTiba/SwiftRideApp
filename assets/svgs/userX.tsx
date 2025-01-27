import * as React from 'react';
import Svg, { Path, Circle, SvgProps } from 'react-native-svg';
const UserX = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-user-round-x"
    {...props}>
    <Path d="M2 21a8 8 0 0 1 11.873-7" />
    <Circle cx={10} cy={8} r={5} />
    <Path d="m17 17 5 5" />
    <Path d="m22 17-5 5" />
  </Svg>
);
export default UserX;
