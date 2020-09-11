import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../screens/Main';
import InjectionSearchC from '../screens/injection/search/InjectionSearchC';
import InjectionRegisterC from '../screens/injection/register/InjectionRegisterC';
import styled from 'styled-components/native';
import {INavigation} from '../components/types/navigation';
import Menu from '../components/Menu';

const Stack = createStackNavigator();

interface IProps {
  navigation: INavigation;
}

export default ({navigation}: IProps) => {
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
        headerRight: () => <Menu navigation={navigation} />,
      }}>
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
