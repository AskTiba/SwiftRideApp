import * as React from 'react';
import Svg, { Path, Circle, SvgProps } from 'react-native-svg';
const MessageDot = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-message-square-dot"
    {...props}>
    <Path d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7" />
    <Circle cx={18} cy={6} r={3} />
  </Svg>
);
export default MessageDot;
