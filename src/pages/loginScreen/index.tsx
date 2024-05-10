import React, {FunctionComponent} from 'react';
import TextTranslation from 'components/textTranslation';
import {LoginProps} from './type';
import SafeAreaViewCustom from 'components/safeAreaViewCustom';
import {View} from 'react-native';
import {styles} from './styles';

const LoginScreen: FunctionComponent<LoginProps> = () => {
  return (
    <SafeAreaViewCustom
      style={styles.flexOne}
      ignoreBottom
      ignoreTop
      contentContainerStyle={styles.flexOne}>
      <View>
        <TextTranslation text="welcome_login" />
      </View>
    </SafeAreaViewCustom>
  );
};

export default LoginScreen;
