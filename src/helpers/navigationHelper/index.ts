import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {RootStackParamList} from 'navigation/type';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const getCurrentRouteName = () => {
  if (navigationRef.current) {
    const currentRoute = navigationRef.current.getCurrentRoute();
    if (currentRoute) {
      return currentRoute.name;
    }
  }
  return null;
};

export const getCurrentRoute = () => {
  if (navigationRef.current) {
    return navigationRef.current.getCurrentRoute();
  }
  return null;
};

export const getCurrentRouteState = () => {
  if (navigationRef.current) {
    return navigationRef.current.getRootState();
  }
  return null;
};

export const reloadCurrentRoute = () => {
  const currentRoute = getCurrentRoute();
  const currentRouteName = getCurrentRouteName();

  if (currentRouteName && currentRoute && navigationRef.current) {
    navigationRef.current.dispatch(
      StackActions.replace(currentRouteName, currentRoute.params),
    );
  }
};
