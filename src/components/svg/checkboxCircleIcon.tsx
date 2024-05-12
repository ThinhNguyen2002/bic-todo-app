import {SIZE_VALUE} from 'constants/size';
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {SVGTypeProps} from './type';
import {COLORS} from 'constants/colors';

const CheckboxCircleSvg: React.FunctionComponent<SVGTypeProps> = ({
  width = SIZE_VALUE._24,
  height = SIZE_VALUE._24,
  isBorder = false,
  color = COLORS.white,
}) => (
  <>
    {isBorder ? (
      <Svg width={width} height={height} fill={color} viewBox="0 0 15 15">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z"
          fill={color}
        />
      </Svg>
    ) : (
      <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
        <G>
          <Path fill="none" d="M0 0h24v24H0z" />
          <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
        </G>
      </Svg>
    )}
  </>
);

export default CheckboxCircleSvg;
