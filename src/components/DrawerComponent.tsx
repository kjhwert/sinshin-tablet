import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {INavigation} from './types/navigation';
import UserContext from '../modules/UserContext';

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
    } else if (
      user.dept_id === injectionDeptId ||
      paintingDeptId ||
      assembleDeptId
    ) {
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
              <ProfileNameText>{user?.name}</ProfileNameText>
              <ProfileDeptNameText>{user?.dept_name}</ProfileDeptNameText>
            </ProfileWrapper>
          )}
          style={{flex: 1, alignItems: 'center', marginTop: 20}}
          onPress={() => {}}
        />
        <Card>
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
        </Card>
        <Card>
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
        </Card>
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
  margin: 30px 0px;
`;

const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
`;

const ProfileNameText = styled.Text`
  font-weight: 500;
  font-size: 25px;
  margin-top: 15px;
`;

const ProfileDeptNameText = styled.Text`
  font-size: 20px;
  color: #666;
  margin-top: 5px;
`;

const Card = styled.View`
  background-color: #ffffff;
  padding: 10px 0px;
  border-bottom-width: 1px;
  border-color: #f4f5fa;
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
  font-size: 22px;
`;
