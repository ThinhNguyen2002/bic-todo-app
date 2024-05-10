import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';

import './src/languages/i18n';
import AppNavigator from 'navigation/appNavigator';
import {store} from 'store';

const App = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <AppNavigator />
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

export default App;
