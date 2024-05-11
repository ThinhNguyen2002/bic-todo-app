import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';
import LoginScreen from 'pages/loginScreen';
import LoadingOverlay from 'components/loadingOverlay';
import {useAppSelector} from 'store';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const {isLoading} = useAppSelector(state => state.app);

  return (
    <>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      </RootStack.Navigator>

      {/* Modal global */}
      {isLoading && <LoadingOverlay />}
    </>
  );
};

export default RootNavigator;
