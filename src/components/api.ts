import axios from 'axios';
import {ILogin} from './types/user';

const api = axios.create({
  baseURL: 'http://sinshin.hlabpartner.com/api',
});

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
  restCheck: async (qr_id: number, token: string) => {
    api.defaults.headers.common.Authorization = token;

    try {
      const {data} = await api.get(`/cosmetics/qr/rest/index.php?id=${qr_id}`);

      return data;
    } catch (e) {
      return e;
    }
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
