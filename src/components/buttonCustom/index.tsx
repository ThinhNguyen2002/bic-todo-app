import TextTranslation from 'components/textTranslation';
import React, {FunctionComponent, useState} from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable as PressBtn,
} from 'react-native';
import {styles} from './styles';
import {ButtonCustomType} from './type';
import {COLORS} from 'constants/colors';

const TIME_DELAY_CLICK = 1000;
const ButtonCustom: FunctionComponent<ButtonCustomType> = ({
  onPress,
  canSubmit = true,
  buttonStyle,
  textBtn,
  textStyle,
  isSecondary,
  isShowLoading = false,
  paramText,
}) => {
  const [isPreventClicking, setIsPreventClicking] = useState(false);
  const handleOnPress = (event: GestureResponderEvent) => {
    if (isPreventClicking) {
      return;
    }

    setIsPreventClicking(true);
    // Action Click
    onPress && onPress(event);
    setTimeout(() => setIsPreventClicking(false), TIME_DELAY_CLICK);
  };

  return (
    <PressBtn
      onPress={handleOnPress}
      disabled={!canSubmit}
      style={[
        styles.wrapBtn,
        canSubmit && styles.wrapBtnActive,
        isSecondary && styles.wrapBtnBorder,
        buttonStyle,
      ]}>
      {(isShowLoading && (
        <ActivityIndicator
          size="small"
          color={textStyle?.color ?? COLORS.mainColor}
        />
      )) || (
        <TextTranslation
          text={textBtn}
          style={[styles.textBtn, textStyle]}
          paramText={paramText}
        />
      )}
    </PressBtn>
  );
};

export default ButtonCustom;
