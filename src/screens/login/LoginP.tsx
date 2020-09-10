import React from 'react';
import styled from 'styled-components/native';

export default ({navigation}) => {
  return (
    <Container>
      <Wrapper>
        <LogoImage
          source={require('../../assets/loginLogo.png')}
          resizeMode="contain"
        />
        <Input placeholder="id" />
        <Input placeholder="password" />
        <LoginBtn
          onPress={() => {
            navigation.navigate('main');
          }}>
          <LoginBtnText>LOGIN</LoginBtnText>
        </LoginBtn>
      </Wrapper>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f4f5fa;
`;

const Wrapper = styled.View`
  width: 100%;
  padding: 40px 20px;
  background-color: #ffffff;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: grey;
  shadow-offset: 0px 0px;
`;

const LogoImage = styled.ImageBackground`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 10px 15px;
  border-width: 1px;
  border-color: #babfc7;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const LoginBtn = styled.TouchableOpacity`
  width: 100%;
  text-align: center;
  background-color: #6c2b96;
  border-radius: 5px;
  margin-bottom: 40px;
`;

const LoginBtnText = styled.Text`
  color: white;
  padding: 15px;
  text-align: center;
  font-weight: bold;
`;
