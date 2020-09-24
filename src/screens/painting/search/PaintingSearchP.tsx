import React from 'react';
import styled from 'styled-components/native';
import {INavigation} from '../../../components/types/navigation';
import Loading from '../../../components/Loading';
import {
  PaintingSearchState,
  PaintingProcess,
} from '../../../components/types/process';

interface IProps {
  navigation: INavigation;
  getProcess: Function;
  state: PaintingSearchState;
  loading: boolean;
  processes: Array<PaintingProcess>;
}

export default ({
  navigation,
  getProcess,
  state,
  setOrderNo,
  setProductName,
  processes,
  loading,
}: IProps) => {
  return (
    <Container>
      <Card>
        <NaviText>{'도장 > 작업정보 검색'}</NaviText>
        <Input
          placeholder="수주번호 (검색)"
          value={state.order_no}
          onChangeText={(text) => {
            setOrderNo(text);
          }}
        />
        <Input
          placeholder="제품명 (검색)"
          value={state.product_name}
          onChangeText={(text) => {
            setProductName(text);
          }}
        />
        <SearchBtn
          onPress={() => {
            getProcess();
          }}>
          <SrchBtnText>검색</SrchBtnText>
        </SearchBtn>
      </Card>
      {loading ? (
        <Loading />
      ) : (
        <Card marginTop={30}>
          <TableContainer>
            <TableTitleWrapper>
              <OrderNumHeader>수주번호</OrderNumHeader>
              <ProductNameHeader>제 품 명</ProductNameHeader>
              <TypeNameHeader>유형</TypeNameHeader>
              <ChoiceBtnHeader>선택버튼</ChoiceBtnHeader>
            </TableTitleWrapper>
            <TableDataWrapper>
              {processes.map((item) => (
                <TableData key={item.id}>
                  <TableDataOrderNum>{item.order_no}</TableDataOrderNum>
                  <TableDataProductName>
                    {item.product_name}
                  </TableDataProductName>
                  <TableDataTypeName>{item.type}</TableDataTypeName>
                  <ChoicelBtn
                    onPress={() => {
                      navigation.navigate('paintingRegister', item);
                    }}>
                    <ChoicelBtnText>선택</ChoicelBtnText>
                  </ChoicelBtn>
                </TableData>
              ))}
            </TableDataWrapper>
          </TableContainer>
        </Card>
      )}
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
  padding: 15px;
  border-width: 1px;
  border-color: #babfc7;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 18px;
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
  font-size: 20px;
  font-weight: bold;
`;

// 하단 테이블
const TableContainer = styled.ScrollView``;

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

const OrderNumHeader = styled.Text`
  font-size: 20px;
  color: #6c6f7f;
  width: 20%;
  text-align: center;
`;

const ProductNameHeader = styled.Text`
  font-size: 20px;
  color: #6c6f7f;
  width: 40%;
  text-align: center;
`;

const TypeNameHeader = styled.Text`
  font-size: 20px;
  color: #6c6f7f;
  width: 15%;
  text-align: center;
`;

const ChoiceBtnHeader = styled.Text`
  font-size: 20px;
  color: #6c6f7f;
  width: 15%;
  text-align: center;
`;

const TableDataWrapper = styled.View``;

const TableData = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
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
  text-align: center;
`;

const TableDataTypeName = styled.Text`
  color: #6c6f7f;
  font-size: 18px;
  width: 15%;
  text-align: center;
`;

const ChoicelBtn = styled.TouchableOpacity`
  background-color: #6c2b96;
  padding: 5px 10px;
  border-radius: 5px;
  width: 15%;
  align-items: center;
`;

const ChoicelBtnText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
