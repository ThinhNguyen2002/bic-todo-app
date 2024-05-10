import React from 'react';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {SafeAreaViewCustomProps} from './type';
import {StatusBar, View} from 'react-native';

const SafeAreaViewCustom: React.FunctionComponent<SafeAreaViewCustomProps> = ({
  children,
  style,
  ignoreLeft,
  ignoreRight,
  ignoreTop,
  ignoreBottom,
  isChangeStatusBar = false,
  testID,
}) => {
  const dataEdge: Edge[] = [];
  if (!ignoreLeft) {
    dataEdge.push('left');
  }
  if (!ignoreRight) {
    dataEdge.push('right');
  }
  if (!ignoreTop) {
    dataEdge.push('top');
  }
  if (!ignoreBottom) {
    dataEdge.push('bottom');
  }

  if (!children) {
    return null;
  }

  return (
    <SafeAreaView style={style} edges={dataEdge}>
      {!isChangeStatusBar && <StatusBar barStyle="light-content" />}
      <View testID={testID || 'overlay'} style={styles.gradient}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default SafeAreaViewCustom;
