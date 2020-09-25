import React, {useState} from 'react';
import InjectionSearchP from './InjectionSearchP';
import {processApi} from '../../../components/api';
import {INavigation} from '../../../components/types/navigation';
import {
  IInjectionProcess,
  IInjectionSearchState,
} from '../../../components/types/process';
import {useDropDown} from '../../../modules/DropDownContext';

interface IProps {
  navigation: INavigation;
}

export default (props: IProps) => {
  const {ref}: any = useDropDown();
  const [state, setState] = useState<IInjectionSearchState>({
    order_no: '',
    product_name: '',
  });

  const [processes, setProcesses] = useState<Array<IInjectionProcess>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getProcess = async () => {
    setLoading(true);
    const {status, data, message} = await processApi.injectionSearch(state);
    if (status !== 200) {
      ref.current.alertWithType('error', '데이터 조회 실패', message);
    }

    setProcesses(data);
    setLoading(false);
  };

  return (
    <InjectionSearchP
      {...props}
      getProcess={getProcess}
      state={state}
      setState={setState}
      processes={processes}
      loading={loading}
    />
  );
};
