/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import AppNavigator from './src/Navigator/AppNavigator';
import {GlobalContextProvider} from './src/Provider/GlobalContextProvider';

const App = () => {
  return (
    <GlobalContextProvider>
      <AppNavigator />
    </GlobalContextProvider>
  );
};

export default App;
