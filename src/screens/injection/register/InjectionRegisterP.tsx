import React from 'react';
import styled from 'styled-components/native';

export default ({navigation, state, setState}) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <NaviText>{'사출 > 불량품 등록'}</NaviText>
            <TitleWrapper>
              <BoldText>수주번호</BoldText>
              <Data>123456789</Data>
            </TitleWrapper>
            <TitleWrapper>
              <BoldText>
                원{'\t'}자{'\t'}재
              </BoldText>
              <Data>PN200 (R-IN-009) / 25kg</Data>
            </TitleWrapper>
            <TitleWrapper>
              <BoldText>
                제{'\t'}품{'\t'}명
              </BoldText>
              <Data>후천기단화현아이/크림캡 25ML 명판</Data>
            </TitleWrapper>
            <TitleWrapper>
              <BoldText>설비번호</BoldText>
              <Data>27</Data>
            </TitleWrapper>
          </Card>
          <Card marginTop={20}>
            <WarningText>
              전체 불량품{'\t'}
              <HighLightText>수량을 입력한 후, 등록버튼</HighLightText>을
              눌러주세요.
            </WarningText>
          </Card>
          <BoxWrapper>
            {['GAS', '기포', '흑점', '미성형', '기름', '기타'].map(
              (DefectType, idx) => (
                <DefectWrapper key={idx}>
                  <DefectBtn
                    onPress={() => {
                      console.log(state);
                      setState(state + 1);
                    }}>
                    <DefectBtnText>{DefectType}</DefectBtnText>
                  </DefectBtn>
                  <CounterBtnWrapper>
                    <CounterBtn
                      onPress={() => {
                        setState(state - 1);
                      }}>
                      <CounterBtnText>-</CounterBtnText>
                    </CounterBtn>
                    <Input
                      placeholder="수량을 입력해주세요"
                      keyboardType="numeric"
                      value={state}
                      onChangeText={(text) => setState(parseInt(text))}
                    />
                    <CounterBtn
                      onPress={() => {
                        setState(state + 1);
                      }}>
                      <CounterBtnText>+</CounterBtnText>
                    </CounterBtn>
                  </CounterBtnWrapper>
                </DefectWrapper>
              ),
            )}
          </BoxWrapper>
        </ScrollWrapper>
      </ScrollContainer>
      <RegisterBtn
        onPress={() => {
          navigation.navigate('main');
        }}>
        <RegisterBtnText>공정완료</RegisterBtnText>
      </RegisterBtn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const ScrollContainer = styled.View`
  height: 92%;
`;

const ScrollWrapper = styled.ScrollView``;

const Card = styled.View`
  background-color: #fff;
  padding: 20px;
  margin-top: ${({marginTop}) => (marginTop ? marginTop : 0)}px;
  border-radius: 5px;
`;

const NaviText = styled.Text`
  width: 100%;
  text-align: right;
  color: #747474;
  font-size: 18px;
`;

const TitleWrapper = styled.View`
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
`;

const BoldText = styled.Text`
  color: #747474;
  font-size: 20px;
  font-weight: bold;
  padding-right: 20px;
`;

const Data = styled.Text`
  color: #747474;
  font-size: 20px;
`;

const WarningText = styled.Text`
  color: #747474;
  margin: 10px 0;
  font-size: 20px;
`;

const HighLightText = styled.Text`
  background-color: #f2f3f5;
  color: #6c2b96;
`;

// 불량 유형
const BoxWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
`;

const DefectWrapper = styled.View`
  width: 46%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
`;

const DefectBtn = styled.TouchableOpacity`
  background-color: #fff;
  font-weight: bold;
  border-radius: 5px;
  padding: 30px;
  align-items: center;
  border-width: 1px;
  border-color: #6967ce;
  width: 100%;
  display: flex;
`;

const DefectBtnText = styled.Text`
  color: #747474;
  font-size: 30px;
  font-weight: bold;
`;

//수량 버튼
const CounterBtnWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
`;

const CounterBtn = styled.TouchableOpacity`
  background-color: #6c2b96;
  font-weight: bold;
  border-radius: 5px;
  align-items: center;
  display: flex;
  padding: 5px 15px;
`;

const CounterBtnText = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

const Input = styled.TextInput`
  width: 65%;
  padding: 10px;
  margin: 5px;
  border-width: 1px;
  border-color: #babfc7;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
`;

// 공정완료 버튼
const RegisterBtn = styled.TouchableOpacity`
  width: 100%;
  background-color: #28afd0;
  border-radius: 5px;
  padding: 15px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const RegisterBtnText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
