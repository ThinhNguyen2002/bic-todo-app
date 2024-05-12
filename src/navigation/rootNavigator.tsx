import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';
import LoginScreen from 'pages/loginScreen';
import LoadingOverlay from 'components/loadingOverlay';
import {useAppSelector} from 'store';
import SignUpScreen from 'pages/signUpScreen';
import BottomTabNavigator from './bottomTabNavigator';
import BottomSheetTask from 'components/bottomSheetTask';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const {isLoading} = useAppSelector(state => state.app);
  const isLoginStore = useAppSelector(state => state.user.isLogin);

  return (
    <>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {!isLoginStore ? (
          <RootStack.Group>
            <RootStack.Screen name="LoginScreen" component={LoginScreen} />
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
          </RootStack.Group>
        ) : (
          <RootStack.Group>
            <RootStack.Screen
              name="BottomTabNavigator"
              component={BottomTabNavigator}
            />
          </RootStack.Group>
        )}
      </RootStack.Navigator>

      {/* Modal global */}
      <BottomSheetTask />
      {isLoading && <LoadingOverlay />}
    </>
  );
};

export default RootNavigator;
