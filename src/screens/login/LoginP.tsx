import React from 'react';
import styled from 'styled-components/native';
import {ILogin} from '../../components/types/user';

interface IProps {
  login: Function;
  state: ILogin;
  setState: Function;
}

export default ({login, state, setState}: IProps) => {
  return (
    <Container>
      <Wrapper>
        <LogoImage
          source={require('../../assets/loginLogo.png')}
          resizeMode="contain"
        />
        <Input
          placeholder="id"
          value={state.user_id}
          autoCapitalize="none"
          onChangeText={(text: string) => {
            setState({...state, user_id: text});
          }}
        />
        <Input
          placeholder="password"
          value={state.user_pw}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text: string) => {
            setState({...state, user_pw: text});
          }}
        />
        <LoginBtn onPress={login}>
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
  height: 50px;
  margin-bottom: 30px;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 15px;
  border-width: 1px;
  border-color: #babfc7;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 18px;
`;

// LOGIN 버튼
const LoginBtn = styled.TouchableOpacity`
  text-align: center;
  background-color: #6c2b96;
  border-radius: 5px;
  padding: 20px;
  align-items: center;
`;

const LoginBtnText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
