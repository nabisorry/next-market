import { authAxios } from '..';
import { User } from '@types';

type SigninParams = {
  username: string;
  password: string;
};

export const signin = async (params: SigninParams): Promise<User> =>
  await authAxios.post('/signin', params);
