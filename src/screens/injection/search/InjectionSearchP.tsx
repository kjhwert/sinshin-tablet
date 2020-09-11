import React from 'react';
import styled from 'styled-components/native';

export default ({navigation}) => {
  return (
    <Container>
      <Card>
        <NaviText>{'사출 > 작업정보 검색'}</NaviText>
        <Input placeholder="설비번호 (선택)" />
        <Input placeholder="수주번호 (검색)" />
        <Input placeholder="제품명 (검색)" />
        <SearchBtn
          onPress={() => {
            navigation.navigate('');
          }}>
          <SrchBtnText>검색</SrchBtnText>
        </SearchBtn>
      </Card>
      <Card marginTop={30}>
        <TableContainer>
          <TableTitleWrapper>
            <AssetNameHeader>설비번호</AssetNameHeader>
            <OrderNumHeader>수주번호</OrderNumHeader>
            <ProductNameHeader>제품명</ProductNameHeader>
            <ChoiceBtnHeader>선택버튼</ChoiceBtnHeader>
          </TableTitleWrapper>
          <TableDataWrapper>
            <TableData>
              <TableDataAssetName></TableDataAssetName>
              <TableDataOrderNum></TableDataOrderNum>
              <TableDataProductName></TableDataProductName>
              <ChoicelBtn
                onPress={() => {
                  navigation.navigate('register');
                }}>
                <ChoicelBtnText>버튼</ChoicelBtnText>
              </ChoicelBtn>
            </TableData>
          </TableDataWrapper>
        </TableContainer>
      </Card>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const Card = styled.View`
  background-color: white;
  padding: 20px;
  margin-top: ${({marginTop}) => (marginTop ? marginTop : 0)}px;
  border-radius: 5px;
`;

const NaviText = styled.Text`
  width: 100%;
  text-align: right;
  color: #747474;
  font-size: 18px;
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

// 검색 버튼
const SearchBtn = styled.TouchableOpacity`
  text-align: center;
  background-color: #6c2b96;
  border-radius: 5px;
  padding: 20px;
  align-items: center;
`;

const SrchBtnText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

// 하단 테이블
const TableContainer = styled.View`
  width: 100%;
`;

const TableTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 5px 0;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: #f4f5fa;
`;

const AssetNameHeader = styled.Text`
  font-size: 20px;
  color: #6c6f7f;
`;

const OrderNumHeader = styled.Text`
  font-size: 20px;
  color: #6c6f7f;
`;

const ProductNameHeader = styled.Text`
  font-size: 20px;
  color: #6c6f7f;
`;

const ChoiceBtnHeader = styled.Text`
  font-size: 20px;
  color: #6c6f7f;
`;

const TableDataWrapper = styled.View`
  padding: 10px;
`;

const TableData = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
`;

const TableDataAssetName = styled.Text`
  color: #6c6f7f;
  font-size: 18px;
  width: 20%;
`;

const TableDataOrderNum = styled.Text`
  text-align: center;
  color: #6c6f7f;
  font-size: 18px;
  width: 20%;
`;

const TableDataProductName = styled.Text`
  color: #6c6f7f;
  font-size: 18px;
  width: 40%;
  flex-flow: wrap;
`;

const ChoicelBtn = styled.TouchableOpacity`
  background-color: #6c2b96;
  padding: 5px 10px;
  border-radius: 5px;
  width: 10%;
  align-items: center;
`;

const ChoicelBtnText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
