import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginC from '../screens/login/LoginC';
import Main from '../screens/Main';
import InjectionSearchC from '../screens/injection/search/InjectionSearchC';
import InjectionRegisterC from '../screens/injection/register/InjectionRegisterC';
import styled from 'styled-components/native';
import {Image} from 'react-native';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitle: () => (
          <HeaderContainer>
            <HeaderImage source={require('../assets/loginLogo.png')} />
          </HeaderContainer>
        ),
        headerRight: () => (
          <Image
            source={require('../assets/menu.png')}
            style={{width: 30, height: 30, marginRight: 20}}
          />
        ),
      }}>
      <Stack.Screen name="login" component={LoginC} />
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="search" component={InjectionSearchC} />
      <Stack.Screen name="register" component={InjectionRegisterC} />
    </Stack.Navigator>
  );
};

const HeaderContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderImage = styled.Image`
  width: 200px;
  height: 40px;
`;
