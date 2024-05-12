import {SIZE_VALUE} from 'constants/size';
import * as React from 'react';
import Svg, {Circle, Line} from 'react-native-svg';
import {SVGTypeProps} from './type';
import {COLORS} from 'constants/colors';

const SearchIcon: React.FunctionComponent<SVGTypeProps> = ({
  width = SIZE_VALUE._24,
  height = SIZE_VALUE._24,
  color = COLORS.mainColor,
}) => (
  <Svg width={width} height={height} fill={color} viewBox="0 0 24 24">
    <Line
      id="secondary"
      x1={21}
      y1={21}
      x2={15}
      y2={15}
      style={{
        fill: 'none',
        stroke: color,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 3,
      }}
    />
    <Circle
      id="primary"
      cx={10}
      cy={10}
      r={7}
      style={{
        fill: 'none',
        stroke: color,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 3,
      }}
    />
  </Svg>
);

export default SearchIcon;
