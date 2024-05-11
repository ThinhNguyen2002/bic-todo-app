import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from './type';

import HomeScreen from 'pages/homeScreen';
import MenuScreen from 'pages/menuScreen';
import NotificationScreen from 'pages/notificationScreen';
import ImportanceScreen from 'pages/importanceScreen';
import CustomTabBarComponent from 'components/customTabBarComponent';

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  const handleNewTabBar = (props: BottomTabBarProps) => (
    <CustomTabBarComponent {...props} />
  );

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBar={handleNewTabBar}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen
        name="ImportanceScreen"
        component={ImportanceScreen}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="MenuScreen" component={MenuScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
