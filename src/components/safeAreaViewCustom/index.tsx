import React from 'react';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {SafeAreaViewCustomProps} from './type';
import {StatusBar} from 'react-native';

const SafeAreaViewCustom: React.FunctionComponent<SafeAreaViewCustomProps> = ({
  children,
  style,
  ignoreLeft,
  ignoreRight,
  ignoreTop,
  ignoreBottom,
  isChangeStatusBar = false,
  barStyle = 'dark-content',
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
      {!isChangeStatusBar && <StatusBar barStyle={barStyle} />}
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaViewCustom;
