import React, {
  ExoticComponent,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  TextInput,
  Pressable as PressBtn,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TouchableOpacity,
} from 'react-native';
import defaultInputStyle from './styles';
import {InputTextType, TextInputRef} from './type';
import {t} from 'i18next';
import TextTranslation from 'components/textTranslation';
import {COLORS} from 'constants/colors';

const InputTextCustom: ExoticComponent<InputTextType> = React.forwardRef<
  TextInputRef,
  InputTextType
>(
  (
    {
      errorBorderColor,
      borderError,
      containerViewStyle,
      placeholder,
      value,
      style: inputStyle,
      onChangeText,
      onBlur,
      onFocus,
      iconHead,
      iconTail,
      maxLength,
      onIconHeadClicked,
      onIconTailClicked,
      secureTextEntry,
      autoComplete = 'off',
      autoCorrect = false,
      testID,
      isRequired = false,
      requiredLabelStyle,
      focusColor,
      isTextArea = false,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<TextInput>(null);
    const [isFocus, setIsFocus] = useState(false);

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (focusColor) {
        setIsFocus(true);
      }
      onFocus && onFocus(e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocus(false);
      onBlur && onBlur(e);
    };

    const generateRequiredLabel = () => {
      if (isRequired) {
        return (
          <TextTranslation
            text="required"
            style={[defaultInputStyle.requiredLabel, requiredLabelStyle]}
          />
        );
      }
      return null;
    };

    useImperativeHandle(ref, () => ({
      handleBlurInput: () => {
        inputRef.current?.blur();
      },
    }));

    return (
      <TouchableOpacity
        onPress={() => isTextArea && inputRef.current?.focus()}
        style={[
          defaultInputStyle.containerView,
          containerViewStyle,
          borderError && {borderColor: errorBorderColor},
          isFocus && {borderColor: focusColor},
        ]}>
        {generateRequiredLabel()}
        {iconHead && (
          <PressBtn
            testID={`${testID ?? ''}-headBtn`}
            onPress={onIconHeadClicked}
            style={defaultInputStyle.iconHead}>
            {iconHead}
          </PressBtn>
        )}
        <TextInput
          testID={testID}
          style={[defaultInputStyle.defaultInputStyle, inputStyle]}
          placeholder={t(placeholder ?? '')}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          placeholderTextColor={COLORS.inputPlaceholder}
          {...props}
          ref={inputRef}
        />
        {iconTail && (
          <PressBtn
            testID={`${testID ?? ''}-tailBtn`}
            onPress={onIconTailClicked}
            style={defaultInputStyle.icon}>
            {iconTail}
          </PressBtn>
        )}
      </TouchableOpacity>
    );
  },
);

export default InputTextCustom;
