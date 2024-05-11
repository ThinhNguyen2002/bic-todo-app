import * as React from 'react';
import {FunctionComponent} from 'react';
import Svg, {Path} from 'react-native-svg';
import {SVGTypeProps} from '../type';
import {SIZE_VALUE} from 'constants/size';
import {COLORS} from 'constants/colors';

const MenuBottomTabIcon: FunctionComponent<SVGTypeProps> = ({
  width = SIZE_VALUE._24,
  height = SIZE_VALUE._24,
  isBorder = false,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill={isBorder ? COLORS.mainColor : COLORS.charcoal}>
    <Path d="M16 3v2h-15v-2h15zM1 10h15v-2h-15v2zM1 15h15v-2h-15v2z" />
  </Svg>
);

export default MenuBottomTabIcon;
