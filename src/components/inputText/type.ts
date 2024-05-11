import {RefObject} from 'react';
import {TextInputProps, TextStyle, ViewStyle} from 'react-native';

export type InputTextType = TextInputProps & {
  activeColor?: string;
  containerViewStyle?: ViewStyle;
  errorViewStyle?: ViewStyle;
  errorText?: string;
  errorTextStyle?: TextStyle;
  iconTail?: React.ReactElement;
  onIconHeadClicked?: () => void;
  iconHead?: React.ReactElement;
  onIconTailClicked?: () => void;
  isRequired?: boolean;
  borderError?: boolean;
  errorBorderColor?: string;
  maxLength?: number;
  cadView?: string;
  requiredLabelStyle?: TextStyle;
  ref?: RefObject<TextInputRef>;
  focusColor?: string;
  isTextArea?: boolean;
};

export type TextInputRef = {
  handleBlurInput: () => void;
};
