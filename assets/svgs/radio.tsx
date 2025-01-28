import * as React from "react";
import Svg, { Path, Circle, SvgProps } from "react-native-svg";
const Radio = (props:SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-radio"
    {...props}
  >
    <Path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
    <Path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
    <Circle cx={12} cy={12} r={2} />
    <Path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
    <Path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
  </Svg>
);
export default Radio;
