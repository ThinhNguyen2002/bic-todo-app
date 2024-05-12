import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import './src/languages/i18n';
import AppNavigator from 'navigation/appNavigator';
import {store} from 'store';
import {themeStyles} from 'themes';

const App = () => {
  return (
    <GestureHandlerRootView style={themeStyles.flex1}>
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <AppNavigator />
        </ReduxProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
