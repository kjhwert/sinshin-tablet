import axios from 'axios';
import {ILogin} from './types/user';
import AsyncStorage from '@react-native-community/async-storage';
import {IInjectionRegister, IInjectionSearchState} from './types/process';

const api = axios.create({
  baseURL: 'http://sinshin.hlabpartner.com/api',
});

api.interceptors.request.use(async (config) => {
  const user = await AsyncStorage.getItem('@user');

  if (user) {
    const {token} = JSON.parse(user);
    config.headers.Authorization = token;
  }

  return config;
});

const apiRequest = async (request: Object) => {
  try {
    const {data}: any = await request;
    return data;
  } catch (e) {
    return e;
  }
};

export const userApi = {
  login: async (loginData: ILogin) => {
    try {
      const {data} = await api.post('/login/index.php', loginData);

      return data;
    } catch (e) {
      return e;
    }
  },
};

export const processApi = {
  injectionSearch: async (state: IInjectionSearchState) => {
    const injectionProcessType = 'M';
    const {order_no, product_name} = state;
    const params = `type=tablet&order_no=${order_no}&product_name=${product_name}&process_type=${injectionProcessType}`;
    return apiRequest(api.get(`/cosmetics/qr/defect/index.php?${params}`));
  },
  injectionDefect: async (process_id: number) => {
    return apiRequest(
      api.get(`/cosmetics/qr/defect/index.php?type=tablet&id=${process_id}`),
    );
  },
  injectionRegister: async (data: IInjectionRegister) => {
    return apiRequest(api.post('cosmetics/qr/defect/index.php', data));
  },
};

export const master = {
  defects: async (group_id: number, token: string) => {
    api.defaults.headers.common.Authorization = token;

    try {
      const {data} = await api.get(`/defect/index.php?group_id=${group_id}`);

      return data;
    } catch (e) {
      return e;
    }
  },
};
