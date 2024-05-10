import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';
import LoginScreen from 'pages/loginScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
