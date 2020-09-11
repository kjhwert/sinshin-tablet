import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginC from '../screens/login/LoginC';
import Drawer from './Drawer';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={LoginC} />
      <Stack.Screen name="drawer" component={Drawer} />
    </Stack.Navigator>
  );
};
