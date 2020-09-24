import React from 'react';
import styled from 'styled-components/native';

const injectionColor = '#6967ce';
const paintingColor = '#5ed84f';

export default ({navigation}) => {
  return (
    <Container>
      <Wrapper>
        <Link
          color={injectionColor}
          marginRight={20}
          onPress={() => {
            navigation.navigate('injectionSearch');
          }}>
          <LinkText color={injectionColor}>사출</LinkText>
        </Link>
        <Link
          color={paintingColor}
          onPress={() => {
            navigation.navigate('paintingSearch');
          }}>
          <LinkText color={paintingColor}>도장</LinkText>
        </Link>
      </Wrapper>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f5fa;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const Link = styled.TouchableOpacity`
  border-color: ${({color}) => color};
  margin-right: ${({marginRight}) => (marginRight ? marginRight : 0)}px;
  border-width: 1px;
  padding: 80px;
  background-color: #fff;
  border-radius: 5px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: grey;
  shadow-offset: 0px 0px;
  margin-bottom: 20px;
`;

const LinkText = styled.Text`
  color: ${({color}) => color};
  text-align: center;
  font-size: 40px;
  font-weight: 500;
`;
