import * as React from "react";
import Svg, { Rect, Circle, Path, SvgProps } from "react-native-svg";
const Banknote = (props:SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-banknote"
    {...props}
  >
    <Rect width={20} height={12} x={2} y={6} rx={2} />
    <Circle cx={12} cy={12} r={2} />
    <Path d="M6 12h.01M18 12h.01" />
  </Svg>
);
export default Banknote;
