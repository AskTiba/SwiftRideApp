import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const UpChevron = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-up"
    {...props}>
    <Path d="m18 15-6-6-6 6" />
  </Svg>
);
export default UpChevron;
