import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'helpers/navigationHelper';
import React from 'react';
import RootNavigator from './rootNavigator';

const AppNavigator: React.FunctionComponent = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
