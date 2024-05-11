import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'helpers/navigationHelper';
import React from 'react';
import RootNavigator from './rootNavigator';
import {useCredentialHandler} from 'customHooks/useCredentialHandler';

const AppNavigator: React.FunctionComponent = () => {
  const {checkUserLogin} = useCredentialHandler();

  const onAppReady = () => {
    checkUserLogin();
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={onAppReady}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
