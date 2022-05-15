import AxiosClient from './AxiosClient';

const auth = '/auth';

export default {
  checkLogin: ({ email, password }) => {
    AxiosClient.post(`${auth}/login`, {
      email,
      password,
    });
  },
};
