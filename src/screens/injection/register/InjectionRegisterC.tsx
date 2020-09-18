import React, {useState, useEffect} from 'react';
import Loading from '../../../components/Loading';
import InjectionRegisterP from './InjectionRegisterP';
import {INavigation} from '../../../components/types/navigation';
import {processApi} from '../../../components/api';
import {IDefect} from '../../../components/types/defect';
import {useDropDown} from '../../../modules/DropDownContext';
import {IInjectionProcess} from '../../../components/types/process';

interface IProps {
  navigation: INavigation;
  route: {
    params: IInjectionProcess;
  };
}

export default (props: IProps) => {
  const {ref}: any = useDropDown();

  const [defects, setDefects] = useState<Array<IDefect>>([]);
  const [loading, setLoading] = useState(false);

  const alertMessage = (type: string, title: string, message: string) => {
    ref.current.alertWithType(type, title, message);
  };

  const getDefects = async () => {
    setLoading(true);
    const {id} = props.route.params;
    const {status, data, message} = await processApi.injectionDefect(id);
    if (status !== 200) {
      alertMessage('error', '데이터 조회 실패', message);
      setLoading(false);
      return;
    }

    setDefects(data);
    setLoading(false);
  };

  const plusQty = async (defect: IDefect) => {
    const newDefect = {...defect, qty: defect.qty + 1};
    await registerDefect(newDefect);
  };

  const minusQty = async (defect: IDefect) => {
    if (defect.qty === 0) {
      alertMessage('error', '', '0보다 작을 수 없습니다.');
      return;
    }

    const newDefect = {...defect, qty: defect.qty - 1};
    await registerDefect(newDefect);
  };

  const registerDefect = async (defect: IDefect) => {
    const {id, order_id, product_id} = props.route.params;
    const tmp = {
      defect_id: defect.id,
      qty: defect.qty,
      process_order_id: id,
      product_id,
      order_id,
    };
    const {status, message} = await processApi.injectionRegister(tmp);
    if (status !== 200) {
      alertMessage('info', '불량등록 실패', message);
      return;
    }

    const newDefects = defects.map((item) =>
      defect.id === item.id ? defect : item,
    );
    setDefects(newDefects);
    alertMessage('info', '', message);
  };

  const registerFinish = () => {
    alertMessage('info', '', '완료되었습니다.');
    props.navigation.goBack();
  };

  useEffect(() => {
    getDefects();
  }, []);

  return loading || !defects ? (
    <Loading />
  ) : (
    <InjectionRegisterP
      {...props}
      defects={defects}
      plusQty={plusQty}
      minusQty={minusQty}
      registerFinish={registerFinish}
    />
  );
};
