import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const Cog = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-cog"
    {...props}>
    <Path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <Path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <Path d="M12 2v2" />
    <Path d="M12 22v-2" />
    <Path d="m17 20.66-1-1.73" />
    <Path d="M11 10.27 7 3.34" />
    <Path d="m20.66 17-1.73-1" />
    <Path d="m3.34 7 1.73 1" />
    <Path d="M14 12h8" />
    <Path d="M2 12h2" />
    <Path d="m20.66 7-1.73 1" />
    <Path d="m3.34 17 1.73-1" />
    <Path d="m17 3.34-1 1.73" />
    <Path d="m11 13.73-4 6.93" />
  </Svg>
);
export default Cog;
