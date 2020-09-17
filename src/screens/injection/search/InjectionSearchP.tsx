import React from 'react';
import styled from 'styled-components/native';
import {INavigation} from '../../../components/types/navigation';
import {
  IInjectionProcess,
  IInjectionSearchState,
} from '../../../components/types/process';
import Loading from '../../../components/Loading';

interface IProps {
  navigation: INavigation;
  getProcess: Function;
  state: IInjectionSearchState;
  setState: Function;
  loading: boolean;
  processes: Array<IInjectionProcess>;
}

export default ({
  navigation,
  getProcess,
  state,
  setState,
  processes,
  loading,
}: IProps) => {
  return (
    <Container>
      <Card>
        <NaviText>{'사출 > 작업정보 검색'}</NaviText>
        <Input
          placeholder="수주번호 (검색)"
          value={state.order_no}
          onChangeText={(t) => {
            setState({...state, order_no: t});
          }}
        />
        <Input
          placeholder="제품명 (검색)"
          value={state.product_name}
          onChangeText={(t) => {
            setState({...state, product_name: t});
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
        <Card marginTop={30} marginBottom={280}>
          <TableContainer>
            <TableTitleWrapper>
              <TableHeader width={'20%'}>설비번호</TableHeader>
              <TableHeader width={'20%'}>수주번호</TableHeader>
              <TableHeader width={'45%'}>제품명</TableHeader>
              <TableHeader width={'15%'}>선택버튼</TableHeader>
            </TableTitleWrapper>
            <TableDataWrapper>
              {processes.map((item: IInjectionProcess) => (
                <TableData key={item.id}>
                  <TableDataAssetName>{item.asset_no}</TableDataAssetName>
                  <TableDataOrderNum>{item.order_no}</TableDataOrderNum>
                  <TableDataProductName>
                    {item.product_name}
                  </TableDataProductName>
                  <ChoiceBtnWrapper>
                    <ChoicelBtn
                      onPress={() => {
                        navigation.navigate('register', item);
                      }}>
                      <ChoicelBtnText>선택</ChoicelBtnText>
                    </ChoicelBtn>
                  </ChoiceBtnWrapper>
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
  margin-bottom: ${({marginBottom}) => (marginBottom ? marginBottom : 0)}px;
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

const TableHeader = styled.Text`
  font-size: 20px;
  color: #6c6f7f;
  width: ${({width}) => (width ? width : '25%')};
  text-align: center;
`;

const TableDataWrapper = styled.View`
  padding: 10px 0;
`;

const TableData = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 0;
`;

const TableDataAssetName = styled.Text`
  color: #6c6f7f;
  font-size: 18px;
  width: 20%;
  text-align: center;
`;

const TableDataOrderNum = styled.Text`
  color: #6c6f7f;
  font-size: 18px;
  width: 20%;
  text-align: center;
`;

const TableDataProductName = styled.Text`
  color: #6c6f7f;
  font-size: 18px;
  width: 45%;
  text-align: center;
`;

const ChoiceBtnWrapper = styled.View`
  display: flex;
  align-items: center;
  width: 15%;
`;

const ChoicelBtn = styled.TouchableOpacity`
  background-color: #6c2b96;
  padding: 5px 10px;
  border-radius: 5px;
  align-items: center;
  width: 70%;
`;

const ChoicelBtnText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
