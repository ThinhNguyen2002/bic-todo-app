import * as React from 'react';
import {FunctionComponent} from 'react';
import Svg, {Path} from 'react-native-svg';
import {SVGTypeProps} from '../type';
import {SIZE_VALUE} from 'constants/size';
import {COLORS} from 'constants/colors';

const HomeBottomTabIcon: FunctionComponent<SVGTypeProps> = ({
  width = SIZE_VALUE._24,
  height = SIZE_VALUE._24,
  isBorder = false,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={isBorder ? COLORS.mainColor : COLORS.charcoal}>
    <Path d="M 12 3.90625 L 11.75 4.0625 L 0.25 11.0625 L 0.75 11.9375 L 12 5.09375 L 23.25 11.9375 L 23.75 11.0625 L 20 8.78125 L 20 4 L 18 4 L 18 7.5625 L 12.25 4.0625 Z M 12 6.5 L 2 12.5 L 2 24 L 22 24 L 22 12.5 Z M 9 13 L 15 13 L 15 22 L 9 22 Z" />
  </Svg>
);

export default HomeBottomTabIcon;
