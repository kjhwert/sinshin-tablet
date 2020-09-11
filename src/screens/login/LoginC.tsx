import React, {useContext, useState} from 'react';
import LoginP from './LoginP';
import {ILogin} from '../../components/types/user';
import UserContext from '../../modules/UserContext';
import {useDropDown} from '../../modules/DropDownContext';
import {userApi} from '../../components/api';
import {INavigation} from '../../components/types/navigation';

interface IProps {
  navigation: INavigation;
}

export default ({navigation}: IProps) => {
  const [state, setState] = useState<ILogin>({
    user_id: '',
    user_pw: '',
  });

  const {saveUser}: any = useContext(UserContext);
  const {ref}: any = useDropDown();

  const login = async () => {
    const {status, data, message} = await userApi.login(state);
    if (status !== 200) {
      ref.current.alertWithType('warn', '로그인 실패', message);
      return;
    }

    saveUser(data);
    setState({user_id: '', user_pw: ''});
    navigation.navigate('drawer');
  };

  return <LoginP login={login} state={state} setState={setState} />;
};
