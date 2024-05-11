import React, {FunctionComponent} from 'react';
import Svg, {Path} from 'react-native-svg';
import {SVGTypeProps} from '../type';
import {SIZE_VALUE} from 'constants/size';
import {View} from 'react-native';
import {styles} from './styles';

const AppleIcon: FunctionComponent<SVGTypeProps> = ({
  width = SIZE_VALUE._35,
  height = SIZE_VALUE._35,
}) => (
  <View style={styles.socialIconView}>
    <Svg width={width} height={height} viewBox="0 0 48 48">
      <Path d="M32.5 44c-1.778 0-3.001-.577-4.08-1.086C27.38 42.424 26.481 42 25 42s-2.38.424-3.42.914C20.501 43.423 19.278 44 17.5 44 13.174 44 6 34.071 6 23.5 6 16.49 10.832 11 17 11c2.027 0 3.259.581 4.346 1.093C22.378 12.58 23.27 13 25 13s2.622-.42 3.654-.907C29.741 11.581 30.973 11 33 11c2.664 0 5.033.982 7.042 2.921.338.326.504.793.447 1.26s-.329.88-.735 1.116C37.438 17.644 36 20.499 36 23.75c0 3.661 2.004 6.809 4.986 7.831.391.134.709.423.879.799.171.375.18.805.023 1.188C39.461 39.515 35.424 44 32.5 44zM25.5 10c-.358 0-.708-.128-.984-.368-.363-.316-.554-.788-.51-1.269.012-.123.303-3.045 2.593-5.382l0 0c2.154-2.2 4.251-2.854 4.482-2.922.489-.142 1.017-.026 1.401.308.385.333.574.839.503 1.344-.034.241-.389 2.436-2.232 4.899-1.973 2.636-4.791 3.322-4.91 3.35C25.729 9.987 25.614 10 25.5 10z" />
    </Svg>
  </View>
);
export default AppleIcon;
