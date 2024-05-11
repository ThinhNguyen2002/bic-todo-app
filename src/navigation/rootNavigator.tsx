import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';
import LoginScreen from 'pages/loginScreen';
import LoadingOverlay from 'components/loadingOverlay';
import {useAppSelector} from 'store';
import SignUpScreen from 'pages/signUpScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const {isLoading} = useAppSelector(state => state.app);

  return (
    <>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
      </RootStack.Navigator>

      {/* Modal global */}
      {isLoading && <LoadingOverlay />}
    </>
  );
};

export default RootNavigator;
