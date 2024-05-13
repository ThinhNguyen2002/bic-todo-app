import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import TextTranslation from 'components/textTranslation';
import {SignUpScreenProps, UserSignUpFormType} from './type';
import SafeAreaViewCustom from 'components/safeAreaViewCustom';
import {Alert, Image, Pressable as PressBtn, Text, View} from 'react-native';
import {styles} from './styles';
import {LOGO} from 'constants/image';
import {useFormik} from 'formik';
import InputTextCustom from 'components/inputText';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from 'constants/colors';
import {validateUserSignUpForm} from 'helpers/validation';
import {themeStyles} from 'themes';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import EyeSvg from 'components/svg/eyeIcon';
import ButtonCustom from 'components/buttonCustom';
import {useLoadingToggle} from 'customHooks/useLoadingToggle';
import LoginWithSocial from 'components/loginSocial';
import CheckboxIcon from 'components/svg/checkboxIcon';
import TickIcon from 'components/svg/tickIcon';
import {REGEX_VALIDATION} from 'constants/regex';
import {signUp} from 'services/authorization';
import {useCredentialHandler} from 'customHooks/useCredentialHandler';
import {SIZE_VALUE} from 'constants/size';

const SignUpScreen: FunctionComponent<SignUpScreenProps> = ({navigation}) => {
  const {top, bottom} = useSafeAreaInsets();
  const {setLoginWithNewCredential} = useCredentialHandler();
  const {isLoading, showLoading} = useLoadingToggle();
  const [hidePass, setHidePass] = useState(true);
  const [passwordConditions, setPasswordConditions] = useState({
    minLength: false,
    uppercase: false,
    lowercase: false,
    digit: false,
    specialCharacter: false,
    noWhiteSpace: false,
  });

  const handleConfirm = async (data: UserSignUpFormType) => {
    showLoading(true);
    try {
      const dataRes = await signUp(data);

      if (dataRes) {
        setLoginWithNewCredential(dataRes);

        return;
      }

      Alert.alert('Sign up failed');
    } catch (error) {
      // To-do: handle error
    }
    showLoading(false);
  };

  const initialValuesForm: UserSignUpFormType = {
    email: '',
    password: '',
    username: '',
    fullName: '',
    checkbox: false,
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
    setFieldValue,
  } = useFormik({
    initialValues: initialValuesForm,
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: validateUserSignUpForm,
    onSubmit: handleConfirm,
  });

  // #region Email input
  const renderEmailInput = useMemo(() => {
    const onFocusEmail = () => {
      setFieldError('email', '');
    };

    return (
      <View>
        <TextTranslation text="signUpScreen.email" style={styles.txtLabel} />
        <InputTextCustom
          containerViewStyle={themeStyles.primaryInput.inputRequiredView}
          placeholder="signUpScreen.emailPlaceholder"
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

  // #region Full name input
  const renderFullName = useMemo(() => {
    const onFocusFullName = () => {
      setFieldError('fullName', '');
    };

    return (
      <View>
        <TextTranslation text="signUpScreen.fullName" style={styles.txtLabel} />
        <InputTextCustom
          containerViewStyle={themeStyles.primaryInput.inputRequiredView}
          placeholder="signUpScreen.fullNamePlaceholder"
          style={themeStyles.primaryInput.inputStyle}
          onBlur={handleBlur('fullName')}
          onChangeText={handleChange('fullName')}
          onFocus={onFocusFullName}
          value={values.fullName}
          focusColor={COLORS.mainColor}
          placeholderTextColor={COLORS.charcoal}
        />
        {errors.fullName && touched.fullName && (
          <TextTranslation text={errors.fullName} style={styles.txtError} />
        )}
      </View>
    );
  }, [
    handleBlur,
    handleChange,
    values.fullName,
    errors.fullName,
    touched.fullName,
    setFieldError,
  ]);

  // #region Username input
  const renderUsername = useMemo(() => {
    const onFocusUsername = () => {
      setFieldError('username', '');
    };

    return (
      <View>
        <TextTranslation text="signUpScreen.username" style={styles.txtLabel} />
        <InputTextCustom
          containerViewStyle={themeStyles.primaryInput.inputRequiredView}
          placeholder="signUpScreen.usernamePlaceholder"
          style={themeStyles.primaryInput.inputStyle}
          onBlur={handleBlur('username')}
          onChangeText={handleChange('username')}
          onFocus={onFocusUsername}
          value={values.username}
          focusColor={COLORS.mainColor}
          placeholderTextColor={COLORS.charcoal}
        />
        {errors.username && touched.username && (
          <TextTranslation text={errors.username} style={styles.txtError} />
        )}
        <TextTranslation
          text="signUpScreen.usernameWarning"
          style={themeStyles.primaryText.textNormal}
        />
      </View>
    );
  }, [
    handleBlur,
    handleChange,
    values.username,
    errors.username,
    touched.username,
    setFieldError,
  ]);

  const validatePassword = useCallback((password: string) => {
    setPasswordConditions({
      minLength: password.length >= 8 && password.length <= 20,
      uppercase: REGEX_VALIDATION.UPPERCASE.test(password),
      lowercase: REGEX_VALIDATION.LOWERCASE.test(password),
      digit: REGEX_VALIDATION.DIGIT.test(password),
      specialCharacter: REGEX_VALIDATION.SPECIAL_CHARACTER.test(password),
      noWhiteSpace: REGEX_VALIDATION.NO_WHITE_SPACE.test(password),
    });
  }, []);
  useEffect(() => {
    validatePassword(values.password);
  }, [values.password, validatePassword]);
  const renderValidatePassword = useMemo(() => {
    const passwordConditionsArray = [
      {condition: passwordConditions.minLength, text: 'signUpScreen.minLength'},
      {condition: passwordConditions.uppercase, text: 'signUpScreen.uppercase'},
      {condition: passwordConditions.lowercase, text: 'signUpScreen.lowercase'},
      {condition: passwordConditions.digit, text: 'signUpScreen.digit'},
      {
        condition: passwordConditions.specialCharacter,
        text: 'signUpScreen.specialCharacter',
      },
      {
        condition: passwordConditions.noWhiteSpace,
        text: 'signUpScreen.noWhiteSpace',
      },
    ];

    return (
      <View style={styles.validatePasswordContainer}>
        {passwordConditionsArray.map(({condition, text}) => (
          <View
            key={text}
            style={[
              styles.validateItem,
              condition && styles.validateItemActive,
            ]}>
            <TickIcon />
            <TextTranslation
              text={text}
              style={[themeStyles.primaryText.textNormal, styles.validateText]}
            />
          </View>
        ))}
      </View>
    );
  }, [passwordConditions]);

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
      </View>
    );
  }, [
    handleBlur,
    handleChange,
    handleIconTailClicked,
    hidePass,
    setFieldError,
    values.password,
  ]);

  // #region Button login
  const canSubmit = useMemo(() => {
    console.log(
      isValid,
      Object.values(passwordConditions).every(condition => condition),
      values.checkbox,
    );
    return (
      isValid &&
      Object.values(passwordConditions).every(condition => condition) &&
      values.checkbox
    );
  }, [isValid, passwordConditions, values.checkbox]);
  const renderButtonLogin = useMemo(() => {
    const handlePress = () => {
      handleSubmit();
    };

    return (
      <ButtonCustom
        textBtn="signUpScreen.signUp"
        onPress={handlePress}
        buttonStyle={styles.buttonView}
        textStyle={styles.textDesc}
        isShowLoading={isLoading}
        canSubmit={canSubmit}
      />
    );
  }, [canSubmit, handleSubmit, isLoading]);

  // #region Sign up
  const renderLogin = useMemo(() => {
    const handlePress = () => {
      navigation.goBack();
    };

    return (
      <PressBtn onPress={handlePress}>
        <Text allowFontScaling={false} style={styles.textBox}>
          <TextTranslation
            text="signUpScreen.alreadyNotHaveAccount"
            style={themeStyles.primaryText.textNormal}
          />
          <TextTranslation
            text="signUpScreen.login"
            style={themeStyles.primaryText.textHighlight}
          />
        </Text>
      </PressBtn>
    );
  }, [navigation]);

  const renderCheckboxView = useMemo(() => {
    const handleSelect = () => {
      setFieldValue('checkbox', !values.checkbox);
    };

    return (
      <View style={styles.checkboxView}>
        <PressBtn style={styles.checkboxIcon} onPress={handleSelect}>
          <CheckboxIcon isBorder={values.checkbox} />
        </PressBtn>
        <Text allowFontScaling={false}>
          <TextTranslation
            text="signUpScreen.agreeToOutPolicy"
            style={themeStyles.primaryText.textNormal}
          />
          <TextTranslation
            text="signUpScreen.privacyTerms"
            style={themeStyles.primaryText.textHighlight}
          />
        </Text>
      </View>
    );
  }, [setFieldValue, values.checkbox]);

  return (
    <SafeAreaViewCustom
      style={styles.flexOne}
      ignoreBottom
      ignoreTop
      contentContainerStyle={styles.flexOne}>
      <KeyboardAwareScrollView
        contentContainerStyle={[
          styles.container,
          {paddingTop: top, paddingBottom: bottom + SIZE_VALUE._10},
        ]}
        showsVerticalScrollIndicator={false}>
        <Image source={LOGO} style={styles.logo} />
        <TextTranslation text="signUpScreen.welcome" style={styles.title} />
        {renderEmailInput}
        {renderFullName}
        {renderUsername}
        {renderPasswordInput}
        {renderValidatePassword}
        {renderCheckboxView}
        {renderButtonLogin}
        {renderLogin}
        <LoginWithSocial />
      </KeyboardAwareScrollView>
    </SafeAreaViewCustom>
  );
};

export default SignUpScreen;
