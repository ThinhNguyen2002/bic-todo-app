import {SIZE_VALUE} from 'constants/size';
import * as React from 'react';
import Svg, {G, Path, Polygon} from 'react-native-svg';
import {SVGTypeProps} from './type';
import {COLORS} from 'constants/colors';

const StarIcon: React.FunctionComponent<SVGTypeProps> = ({
  width = SIZE_VALUE._24,
  height = SIZE_VALUE._24,
  isBorder = false,
  color = COLORS.white,
}) => (
  <Svg width={width} height={height} fill={color} viewBox="0 0 24 24">
    {isBorder ? (
      <Polygon
        id="primary"
        points="12 4 9.22 9.27 3 10.11 7.5 14.21 6.44 20 12 17.27 17.56 20 16.5 14.21 21 10.11 14.78 9.27 12 4"
        style={{
          fill: 'none',
          stroke: color,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
    ) : (
      <Path
        id="primary"
        d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
        style={{
          fill: color,
        }}
      />
    )}
  </Svg>
);

export default StarIcon;
