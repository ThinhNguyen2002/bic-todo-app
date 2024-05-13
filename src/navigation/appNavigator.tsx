import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'helpers/navigationHelper';
import React from 'react';
import RootNavigator from './rootNavigator';
import {useCredentialHandler} from 'customHooks/useCredentialHandler';
import SplashScreen from 'react-native-splash-screen';

const AppNavigator: React.FunctionComponent = () => {
  const {checkUserLogin} = useCredentialHandler();

  const onAppReady = async () => {
    await checkUserLogin();
    SplashScreen.hide();
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={onAppReady}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
