import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginC from '../screens/login/LoginC';
import Drawer from './Drawer';
import UserContext from '../modules/UserContext';
import Loading from '../components/Loading';

const Stack = createStackNavigator();

export default () => {
  const {user, loading}: any = useContext(UserContext);

  return loading ? (
    <Loading />
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}>
      {user ? (
        <>
          <Stack.Screen name="drawer" component={Drawer} />
          <Stack.Screen name="login" component={LoginC} />
        </>
      ) : (
        <>
          <Stack.Screen name="login" component={LoginC} />
          <Stack.Screen name="drawer" component={Drawer} />
        </>
      )}
    </Stack.Navigator>
  );
};
