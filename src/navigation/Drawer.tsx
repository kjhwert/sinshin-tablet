import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerComponent from '../components/DrawerComponent';
import MainStack from './MainStack';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={(props) => <DrawerComponent {...props} />}>
      <Drawer.Screen name="mainStack" component={MainStack} />
    </Drawer.Navigator>
  );
};
