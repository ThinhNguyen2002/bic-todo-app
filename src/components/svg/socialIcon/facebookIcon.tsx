import React, {FunctionComponent} from 'react';
import Svg, {Path} from 'react-native-svg';
import {SVGTypeProps} from '../type';
import {SIZE_VALUE} from 'constants/size';
import {View} from 'react-native';
import {styles} from './styles';

const FacebookIcon: FunctionComponent<SVGTypeProps> = ({
  width = SIZE_VALUE._35,
  height = SIZE_VALUE._35,
}) => (
  <View style={styles.socialIconView}>
    <Svg width={width} height={height} viewBox="0 0 48 48" fill="none">
      <Path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
      <Path
        fill="#fff"
        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
      />
    </Svg>
  </View>
);
export default FacebookIcon;
