import axios from 'axios';
import {ILogin} from './types/user';

const api = axios.create({
  baseURL: 'http://sinshin.hlabpartner.com/api',
});

export const userApi = {
  login: async (loginData: ILogin) => {
    const {data} = await api.post('/login/index.php', loginData);

    return data;
  },
};

export const processApi = {
  restCheck: async (qr_id: number, token: string) => {
    api.defaults.headers.common.Authorization = token;

    const {data} = await api.get(`/cosmetics/qr/rest/index.php?id=${qr_id}`);

    return data;
  },
};
