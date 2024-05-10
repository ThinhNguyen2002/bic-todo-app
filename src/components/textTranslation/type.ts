import {TextProps} from 'react-native';

export type TextTranslationProps = {
  text: string;
  paramText?: any;
  ignoreTranslate?: boolean;
  upperCaseType?: 'All' | 'CamelCase';
} & TextProps;
