import React, {useState, useEffect, useContext} from 'react';
import Loading from '../../../components/Loading';
import InjectionRegisterP from './InjectionRegisterP';
import {INavigation} from '../../../components/types/navigation';
import {master} from '../../../components/api';
import UserContext from '../../../modules/UserContext';
import {IDefect} from '../../../components/types/defect';
import {useDropDown} from '../../../modules/DropDownContext';

interface IProps {
  navigation: INavigation;
}

export default (props: IProps) => {
  const {user}: any = useContext(UserContext);
  const {ref}: any = useDropDown();

  const [state, setState] = useState<Array<IDefect>>([]);
  const [loading, setLoading] = useState(false);

  const getDefects = async () => {
    setLoading(true);
    const {data} = await master.defects(4, user.token);
    const defects = data.map((item: IDefect) => {
      item.qty = 0;
      return item;
    });

    setState(defects);
    setLoading(false);
  };

  const plusQty = async (defect: IDefect) => {
    const newState = state.map((item) =>
      defect.id === item.id ? {...item, qty: defect.qty + 1} : item,
    );
    setState(newState);
    ref.current.alertWithType('info', '', '등록되었습니다.');
  };

  const minusQty = async (defect: IDefect) => {
    if (defect.qty === 0) {
      ref.current.alertWithType('error', '', '0보다 작을 수 없습니다.');
      return;
    }
    const newState = state.map((item) =>
      defect.id === item.id ? {...item, qty: defect.qty - 1} : item,
    );
    setState(newState);
    ref.current.alertWithType('info', '', '등록되었습니다.');
  };

  const changeQty = (defect: IDefect, qty: string) => {
    const changeQty = parseInt(qty);
    const newState = state.map((item) =>
      defect.id === item.id ? {...item, qty: changeQty} : item,
    );
    setState(newState);
  };

  const registerFinish = () => {
    ref.current.alertWithType('info', '', '완료되었습니다.');
    props.navigation.goBack();
  };

  useEffect(() => {
    getDefects();
  }, []);

  return loading || !state ? (
    <Loading />
  ) : (
    <InjectionRegisterP
      {...props}
      state={state}
      plusQty={plusQty}
      minusQty={minusQty}
      changeQty={changeQty}
      registerFinish={registerFinish}
    />
  );
};
