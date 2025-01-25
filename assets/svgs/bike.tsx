import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
const Bike = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-bike"
    {...props}>
    <Circle cx={18.5} cy={17.5} r={3.5} />
    <Circle cx={5.5} cy={17.5} r={3.5} />
    <Circle cx={15} cy={5} r={1} />
    <Path d="M12 17.5V14l-3-3 4-3 2 3h2" />
  </Svg>
);
export default Bike;
