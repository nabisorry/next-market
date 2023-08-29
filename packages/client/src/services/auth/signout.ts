import { authAxios } from '..';

export const signout = async (): Promise<{ message: string }> =>
  await authAxios.post('/signout');
