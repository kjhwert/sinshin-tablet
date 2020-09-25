import React, {useState} from 'react';
import AssembleSearchP from './AssembleSearchP';
import {processApi} from '../../../components/api';
import {INavigation} from '../../../components/types/navigation';
import Loading from '../../../components/Loading';
import {
  PaintingSearchState,
  PaintingProcess,
} from '../../../components/types/process';
import {useDropDown} from '../../../modules/DropDownContext';

interface IProps {
  navigation: INavigation;
}

export default (props: IProps) => {
  const {ref}: any = useDropDown();
  const [state, setState] = useState<PaintingSearchState>({
    order_no: '',
    product_name: '',
  });

  const [processes, setProcesses] = useState<Array<PaintingProcess>>([]);
  const [loading, setLoading] = useState(false);

  const alertMessage = (type: string, title: string, message: string) => {
    ref.current.alertWithType(type, title, message);
  };

  const setOrderNo = (text: string) => {
    setState({...state, order_no: text});
  };
  const setProductName = (text: string) => {
    setState({...state, product_name: text});
  };

  const getProcess = async () => {
    setLoading(true);
    const {status, data, message} = await processApi.paintingSearch(state);
    if (status !== 200) {
      alertMessage('error', '데이터 조회 실패', message);
      setLoading(false);
      return;
    }
    setProcesses(data);
    setLoading(false);
  };

  return (
    <AssembleSearchP
      {...props}
      getProcess={getProcess}
      state={state}
      setState={setState}
      setOrderNo={setOrderNo}
      setProductName={setProductName}
      processes={processes}
      loading={loading}
    />
  );
};
