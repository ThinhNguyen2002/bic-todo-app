import {View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {styles} from './styles';
import TextTranslation from 'components/textTranslation';
import {themeStyles} from 'themes';
import {FacebookIcon, GoogleIcon, AppleIcon} from 'components/svg/socialIcon';

const LoginWithSocial: FunctionComponent = () => {
  return (
    <View style={styles.loginWithSocialContainer}>
      <View style={styles.breakLineContainer}>
        <View style={styles.breakLine} />
        <TextTranslation
          style={[styles.breakLineText, themeStyles.primaryText.textNormal]}
          text="loginScreen.orLoginWith"
        />
        <View style={styles.breakLine} />
      </View>
      <View style={styles.socialIconView}>
        <FacebookIcon />
        <GoogleIcon />
        <AppleIcon />
      </View>
    </View>
  );
};

export default LoginWithSocial;
