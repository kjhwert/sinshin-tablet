import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container
      onPress={() => {
        navigation.openDrawer();
      }}>
      <MenuImage source={require('../assets/menu.png')} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  margin-right: 10px;
  padding: 5px;
`;

const MenuImage = styled.Image`
  width: 25px;
  height: 25px;
`;
