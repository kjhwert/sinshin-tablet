import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../screens/Main';
import InjectionSearchC from '../screens/injection/search/InjectionSearchC';
import InjectionRegisterC from '../screens/injection/register/InjectionRegisterC';
import PaintingSearchC from '../screens/painting/search/PaintingSearchC';
import PaintingRegisterC from '../screens/painting/register/PaintingRegisterC';
import AssembleSearchC from '../screens/assemble/search/AssembleSearchC';
import AssembleRegisterC from '../screens/assemble/register/AssembleRegisterC';
import styled from 'styled-components/native';
import {INavigation} from '../components/types/navigation';
import Menu from '../components/Menu';
import UserContext from '../modules/UserContext';
import Loading from '../components/Loading';

const Stack = createStackNavigator();

interface IProps {
  navigation: INavigation;
}

const injectionDeptId = 6;
const paintingDeptId = 4;
const assembleDeptId = 5;

export default ({navigation}: IProps) => {
  const {user}: any = useContext(UserContext);

  const initRoute = () => {
    if (!user) {
      return '';
    }
    switch (user.dept_id) {
      case injectionDeptId:
        return 'injectionSearch';
      case paintingDeptId:
        return 'paintingSearch';
      case assembleDeptId:
        return 'assembleSearch';
      default:
        return 'main';
    }
  };

  return user ? (
    <Stack.Navigator
      initialRouteName={initRoute()}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitle: () => (
          <HeaderContainer>
            <HeaderImage source={require('../assets/loginLogo.png')} />
          </HeaderContainer>
        ),
        headerRight: () => <Menu navigation={navigation} />,
        cardStyle: {backgroundColor: '#f4f5fa'},
      }}>
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="injectionSearch" component={InjectionSearchC} />
      <Stack.Screen name="injectionRegister" component={InjectionRegisterC} />
      <Stack.Screen name="paintingSearch" component={PaintingSearchC} />
      <Stack.Screen name="paintingRegister" component={PaintingRegisterC} />
      <Stack.Screen name="assembleSearch" component={AssembleSearchC} />
      <Stack.Screen name="assembleRegister" component={AssembleRegisterC} />
    </Stack.Navigator>
  ) : (
    <Loading />
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
