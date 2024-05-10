import React from 'react';
import {Text} from 'react-native';
import {TextTranslationProps} from './type';
import {useTranslation} from 'react-i18next';

const TextTranslation: React.FunctionComponent<TextTranslationProps> = ({
  ignoreTranslate = false,
  paramText,
  text,
  upperCaseType,
  ...props
}) => {
  const {t} = useTranslation();
  const textResult = ignoreTranslate ? text : t(text, paramText);

  const renderTextResult = () => {
    switch (upperCaseType) {
      case 'All':
        return textResult.toUpperCase();
      default:
        return textResult;
    }
  };

  return (
    <Text allowFontScaling={false} {...props}>
      {renderTextResult()}
    </Text>
  );
};

export default TextTranslation;
