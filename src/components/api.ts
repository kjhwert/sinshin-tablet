import axios from 'axios';
import {ILogin} from './types/user';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://sinshin.hlabpartner.com/api',
});

api.interceptors.request.use(async (config) => {
  const user = await AsyncStorage.getItem('@user');

  if (user) {
    const {token} = JSON.parse(user);
    config.headers.common.Authorization = token;
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
    const {data} = await api.post('/login/index.php', loginData);
    return data;
  },
};

export const processApi = {
  injection: async (data) => {
    const {order_no, product_name, type, process_type} = data;
    return apiRequest(
      api.get(
        `/cosmetics/qr/defect/index.php?order_no=${order_no}&product_name=${product_name}&type=${type}&process_type=${process_type}`,
      ),
    );
  },
};

export const masterApi = {
  defects: (group_id: number, token: string) => {
    return apiRequest(api.get(`/defect/index.php?group_id=${group_id}`));
  },
};
