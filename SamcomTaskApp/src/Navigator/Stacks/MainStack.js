import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import all screens
import HomeScreen from '../../Screens/HomeScreen';

//create stack of auth
const Stack = createNativeStackNavigator();

export default AuthStack = () => (
  <Stack.Navigator initialRouteName="User List">
    <Stack.Screen name="User List" component={HomeScreen} />
  </Stack.Navigator>
);
