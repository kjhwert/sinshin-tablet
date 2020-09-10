import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginC from '../screens/login/LoginC';
import Main from '../screens/Main';
import InjectionSearchC from '../screens/injection/search/InjectionSearchC';
import InjectionRegisterC from '../screens/injection/register/InjectionRegisterC';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginC} />
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="search" component={InjectionSearchC} />
      <Stack.Screen name="register" component={InjectionRegisterC} />
    </Stack.Navigator>
  );
};
