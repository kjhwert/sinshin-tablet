import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {INavigation} from './types/navigation';
import UserContext from '../modules/UserContext';
import {Text} from 'react-native';

interface IProps {
  navigation: INavigation;
}

const injectionDeptId = 6;
const paintingDeptId = 4;
const assembleDeptId = 5;

export default (props: IProps) => {
  const {user, userLogout}: any = useContext(UserContext);

  const initRoute = () => {
    if (!user) {
      return;
    }
    switch (user.dept_id) {
      case injectionDeptId:
        return 'injection';
      case paintingDeptId:
        return 'painting';
      case assembleDeptId:
        return 'assemble';
      default:
        return 'main';
    }
  };
  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          {...props}
          label={() => (
            <ProfileWrapper>
              <ProfileImage source={require('../assets/profile.png')} />
              <Text style={{fontSize: 20, marginTop: 15}}>{user?.name}</Text>
              <Text style={{color: '#666666', marginTop: 5}}>
                {user?.dept_name}
              </Text>
            </ProfileWrapper>
          )}
          style={{flex: 1, alignItems: 'center'}}
          onPress={() => {}}
        />
        <DrawerItem
          {...props}
          label={() => (
            <HomeWrapper>
              <HomeImage source={require('../assets/home.png')} />
              <NText>HOME</NText>
            </HomeWrapper>
          )}
          style={{flex: 1}}
          onPress={() => {
            props.navigation.navigate(initRoute());
          }}
        />
        <DrawerItem
          {...props}
          label={() => (
            <LogoutWrapper>
              <LogoutImage source={require('../assets/logout.png')} />
              <NText>LOGOUT</NText>
            </LogoutWrapper>
          )}
          style={{flex: 1}}
          onPress={() => {
            props.navigation.navigate('login');
            userLogout();
          }}
        />
      </DrawerContentScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ProfileWrapper = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 60px;
  height: 60px;
`;

const LogoutWrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const LogoutImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const HomeWrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HomeImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const NText = styled.Text`
  color: #999999;
  font-weight: 500;
  font-size: 18px;
`;
