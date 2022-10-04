import React, {createRef, useContext, useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootNavigator from './RootNavigator';
import {GlobalContext} from '../Provider/GlobalContextProvider';

export const navigationRef = createRef();

const AppNavigator = ({}) => {
  const {state, userActions} = useContext(GlobalContext);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <RootNavigator state={state} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
