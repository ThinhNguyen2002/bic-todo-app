import {StatusBarStyle, ViewStyle} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

export type SafeAreaViewCustomProps = {
  ignoreLeft?: boolean;
  ignoreRight?: boolean;
  ignoreTop?: boolean;
  ignoreBottom?: boolean;
  contentContainerStyle?: ViewStyle;
  isChangeStatusBar?: boolean;
  barStyle?: StatusBarStyle;
} & SafeAreaViewProps;
