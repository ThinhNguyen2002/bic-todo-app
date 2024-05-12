import {SIZE_VALUE} from 'constants/size';
import * as React from 'react';
import Svg, {Circle, Path, Rect} from 'react-native-svg';
import {SVGTypeProps} from './type';
import {COLORS} from 'constants/colors';

const PlusIcon: React.FunctionComponent<SVGTypeProps> = ({
  width = SIZE_VALUE._32,
  height = SIZE_VALUE._32,
  color = COLORS.white,
}) => (
  <Svg width={width} height={height} fill={color} viewBox="0 0 24 24">
    <Path d="M18 10h-4v-4c0-1.104-.896-2-2-2s-2 .896-2 2l.071 4h-4.071c-1.104 0-2 .896-2 2s.896 2 2 2l4.071-.071-.071 4.071c0 1.104.896 2 2 2s2-.896 2-2v-4.071l4 .071c1.104 0 2-.896 2-2s-.896-2-2-2z" />
  </Svg>
);

export default PlusIcon;
