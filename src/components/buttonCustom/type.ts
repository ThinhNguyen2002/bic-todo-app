import {PressableProps, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type ButtonCustomType = {
  canSubmit?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textBtn: string;
  textStyle?: TextStyle;
  isSecondary?: boolean;
  isShowLoading?: boolean;
  paramText?: {[key: string]: string};
} & PressableProps;
