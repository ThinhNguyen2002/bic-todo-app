import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';
import {useAppSelector} from 'store';
import {COLORS} from 'constants/colors';

const LoadingOverlay: React.FunctionComponent = () => {
  const isShowLoadingIcon = useAppSelector(
    state => state.app.isShowLoadingIcon,
  );

  return (
    <View
      style={[styles.container, isShowLoadingIcon && styles.backgroundColor]}>
      {isShowLoadingIcon && (
        <ActivityIndicator size="large" color={COLORS.mainColor} />
      )}
    </View>
  );
};

export default LoadingOverlay;
