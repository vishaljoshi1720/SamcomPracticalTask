import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import auth related screens
import LoginScreen from '../../Screens/LoginScreen';

//create stack of auth
const Stack = createNativeStackNavigator();

export default AuthStack = () => (
  <Stack.Navigator
    initialRouteName="LoginScreen"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
  </Stack.Navigator>
);
