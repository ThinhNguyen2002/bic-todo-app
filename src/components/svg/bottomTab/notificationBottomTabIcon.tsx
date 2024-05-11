import * as React from 'react';
import {FunctionComponent} from 'react';
import Svg, {Path} from 'react-native-svg';
import {SVGTypeProps} from '../type';
import {SIZE_VALUE} from 'constants/size';
import {COLORS} from 'constants/colors';

const NotificationBottomTabIcon: FunctionComponent<SVGTypeProps> = ({
  width = SIZE_VALUE._24,
  height = SIZE_VALUE._24,
  isBorder = false,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={isBorder ? COLORS.mainColor : COLORS.charcoal}>
    <Path d="M21,17H20V10A8,8,0,0,0,4,10v7H3a1,1,0,0,0,0,2H8.13a4,4,0,0,0,7.74,0H21a1,1,0,0,0,0-2Zm-9,3a2,2,0,0,1-1.73-1h3.46A2,2,0,0,1,12,20Z" />
  </Svg>
);

export default NotificationBottomTabIcon;
