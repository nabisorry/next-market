import { userAxios } from '..';

//@ts-ignore
import { User } from '@types';

export const getAllUsers = async (): Promise<User[]> =>
  (await userAxios.get('')).data;

type GetUserParams = {
  id: number;
};

export const getUser = async ({ id }: GetUserParams): Promise<User> =>
  (await userAxios.get(`/${id}`)).data;
