import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const BellRing = (props:SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-bell-ring"
    {...props}
  >
    <Path d="M10.268 21a2 2 0 0 0 3.464 0" />
    <Path d="M22 8c0-2.3-.8-4.3-2-6" />
    <Path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
    <Path d="M4 2C2.8 3.7 2 5.7 2 8" />
  </Svg>
);
export default BellRing;
