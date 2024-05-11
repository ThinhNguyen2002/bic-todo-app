import * as React from 'react';
import {FunctionComponent} from 'react';
import Svg, {Defs, G, Path, Polygon} from 'react-native-svg';
import {SVGTypeProps} from './type';
import {SIZE_VALUE} from 'constants/size';
import {COLORS} from 'constants/colors';

const TickIcon: FunctionComponent<SVGTypeProps> = ({
  width = SIZE_VALUE._20,
  height = SIZE_VALUE._20,
  color = COLORS.limeGreen,
  opacity = 1,
}) => (
  <Svg
    x="0px"
    y="0px"
    viewBox="0 0 97 97"
    id="svg12"
    opacity={opacity}
    width={width}
    height={height}>
    <Defs />
    <G id="g6" transform="translate(-1.4,-1.4)" fill={color}>
      <Polygon
        points="44.1,58.3 31.8,45.9 28.8,48.9 44.1,64.2 69.5,38.8 66.6,35.8 "
        id="polygon2"
        fill={color}
      />
      <Path
        d="M 50,88.6 C 71.3,88.6 88.6,71.3 88.6,50 88.6,28.7 71.3,11.4 50,11.4 28.7,11.4 11.4,28.7 11.4,50 11.4,71.3 28.7,88.6 50,88.6 Z m 0,-73 C 68.9,15.6 84.4,31 84.4,50 84.4,69 68.9,84.4 50,84.4 31.1,84.4 15.6,68.9 15.6,50 15.6,31.1 31.1,15.6 50,15.6 Z"
        id="path4"
        fill={color}
      />
    </G>
  </Svg>
);
export default TickIcon;
