import React, {FunctionComponent, useCallback, useMemo, useState} from 'react';
import TextTranslation from 'components/textTranslation';
import {LoginProps, UserLoginFormType} from './type';
import SafeAreaViewCustom from 'components/safeAreaViewCustom';
import {Image, Pressable as PressBtn, Text, View} from 'react-native';
import {styles} from './styles';
import {LOGO} from 'constants/image';
import {useFormik} from 'formik';
import InputTextCustom from 'components/inputText';
import {COLORS} from 'constants/colors';
import {validateUserLoginForm} from 'helpers/validation';
import {themeStyles} from 'themes';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import EyeSvg from 'components/svg/eyeIcon';
import ButtonCustom from 'components/buttonCustom';
import {useLoadingToggle} from 'customHooks/useLoadingToggle';
import LoginWithSocial from 'components/loginSocial';

const LoginScreen: FunctionComponent<LoginProps> = () => {
  const {isLoading, showLoading} = useLoadingToggle();
  const [hidePass, setHidePass] = useState(true);

  const handleConfirm = () => {};

  const initialValuesForm: UserLoginFormType = {
    email: '',
    password: '',
  };

  const {
    errors,
    values,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldError,
  } = useFormik({
    initialValues: initialValuesForm,
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: validateUserLoginForm,
    onSubmit: handleConfirm,
  });

  // #region Email input
  const renderEmailInput = useMemo(() => {
    const onFocusEmail = () => {
      setFieldError('email', '');
    };

    return (
      <View>
        <TextTranslation text="loginScreen.email" style={styles.txtLabel} />
        <InputTextCustom
          containerViewStyle={themeStyles.primaryInput.inputRequiredView}
          placeholder="loginScreen.emailPlaceholder"
          style={themeStyles.primaryInput.inputStyle}
          onBlur={handleBlur('email')}
          onChangeText={handleChange('email')}
          onFocus={onFocusEmail}
          value={values.email}
          focusColor={COLORS.mainColor}
          placeholderTextColor={COLORS.charcoal}
        />
        {errors.email && touched.email && (
          <TextTranslation text={errors.email} style={styles.txtError} />
        )}
      </View>
    );
  }, [
    handleBlur,
    handleChange,
    values.email,
    errors.email,
    touched.email,
    setFieldError,
  ]);

  const handleIconTailClicked = useCallback(() => {
    setHidePass(!hidePass);
  }, [hidePass]);

  // #region Password input
  const renderPasswordInput = useMemo(() => {
    const onFocusPassword = () => {
      setFieldError('password', '');
    };

    return (
      <View>
        <TextTranslation text="loginScreen.password" style={styles.txtLabel} />
        <InputTextCustom
          containerViewStyle={themeStyles.primaryInput.inputRequiredView}
          placeholder="loginScreen.passwordPlaceholder"
          style={themeStyles.primaryInput.inputStyle}
          onBlur={handleBlur('password')}
          onChangeText={handleChange('password')}
          onFocus={onFocusPassword}
          value={values.password}
          focusColor={COLORS.mainColor}
          placeholderTextColor={COLORS.charcoal}
          iconTail={<EyeSvg isBorder={!hidePass} />}
          onIconTailClicked={handleIconTailClicked}
          secureTextEntry={hidePass}
        />
        {errors.password && touched.password && (
          <TextTranslation text={errors.password} style={styles.txtError} />
        )}
      </View>
    );
  }, [
    errors.password,
    handleBlur,
    handleChange,
    handleIconTailClicked,
    hidePass,
    setFieldError,
    touched.password,
    values.password,
  ]);

  // #region Button login
  const renderButtonLogin = useMemo(() => {
    const handlePress = () => {
      handleSubmit();
    };

    return (
      <ButtonCustom
        textBtn="loginScreen.textBtn"
        onPress={handlePress}
        buttonStyle={styles.buttonView}
        textStyle={styles.textDesc}
        isShowLoading={isLoading}
        canSubmit={isValid && dirty}
      />
    );
  }, [dirty, handleSubmit, isLoading, isValid]);

  // #region Sign up
  const renderSignUp = useMemo(() => {
    const handlePress = () => {};

    return (
      <PressBtn onPress={handlePress}>
        <Text allowFontScaling={false} style={styles.textBox}>
          <TextTranslation
            text="loginScreen.doNotHaveAccount"
            style={themeStyles.primaryText.textNormal}
          />
          <TextTranslation
            text="loginScreen.signUp"
            style={themeStyles.primaryText.textHighlight}
          />
        </Text>
      </PressBtn>
    );
  }, []);

  const renderPrivacyPolicy = useMemo(() => {
    return (
      <View style={styles.privacyPolicy}>
        <TextTranslation
          text="loginScreen.agree"
          style={themeStyles.primaryText.textNormal}
        />
        <TextTranslation
          text="loginScreen.privacyTerms"
          style={themeStyles.primaryText.textHighlight}
        />
      </View>
    );
  }, []);

  return (
    <SafeAreaViewCustom
      style={styles.flexOne}
      contentContainerStyle={styles.flexOne}>
      <KeyboardAwareScrollView style={styles.container}>
        <Image source={LOGO} style={styles.logo} />
        <TextTranslation text="loginScreen.welcomeBack" style={styles.title} />
        {renderEmailInput}
        {renderPasswordInput}
        <TextTranslation
          text="loginScreen.forgotPassword"
          style={styles.forgotPassword}
        />
        {renderButtonLogin}
        {renderSignUp}
        <LoginWithSocial />
        {renderPrivacyPolicy}
      </KeyboardAwareScrollView>
    </SafeAreaViewCustom>
  );
};

export default LoginScreen;
