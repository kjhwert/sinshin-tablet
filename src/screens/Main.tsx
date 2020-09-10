import React from 'react';
import styled from 'styled-components/native';

const injectionColor = '#6967ce';

export default ({navigation}) => {
  return (
    <Wrapper>
      <Link
        color={injectionColor}
        onPress={() => {
          navigation.navigate('search');
        }}
        style={{marginRight: 10}}>
        <LinkText color={injectionColor}>사출</LinkText>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  /* display: flex; */
  /* flex-direction: row; */
`;

const Link = styled.TouchableOpacity`
  border-color: ${({color}) => color};
  border-width: 1px;
  padding: 50px;
  background-color: white;
  border-radius: 5px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: grey;
  shadow-offset: 0px 0px;
  margin-bottom: 10px;
`;

const LinkText = styled.Text`
  color: ${({color}) => color};
  width: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;
