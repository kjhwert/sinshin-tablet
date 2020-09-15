import React, {useState} from 'react';
import {processApi} from '../../../components/api';
import Loading from '../../../components/Loading';
import {useDropDown} from '../../../modules/DropDownContext';
import InjectionSearchP from './InjectionSearchP';

export default (props) => {
  const {ref} = useDropDown();
  const [state, setState] = useState({
    order_no: '',
    product_name: '',
    type: 'tablet',
    process_type: 'M',
  });

  const [process, setProcess] = useState([]);
  const [loading, setLoading] = useState(false);

  const setOrderNo = (text: string) => {
    setState({...state, order_no: text});
  };

  const setProductName = (text: string) => {
    setState({...state, product_name: text});
  };

  const getList = async () => {
    setLoading(true);
    const {data, status, message} = await processApi.injection(state);
    if (status !== 200) {
      ref.current.alertWithType('error', '데이터 조회 실패', message);
      setLoading(false);
      return;
    }

    setProcess(data);
    setLoading(false);
  };

  return (
    <InjectionSearchP
      {...props}
      state={state}
      setState={setState}
      getList={getList}
      setOrderNo={setOrderNo}
      setProductName={setProductName}
      process={process}
      loading={loading}
    />
  );
};
