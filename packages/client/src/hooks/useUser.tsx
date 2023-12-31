import useSWR from 'swr';
import type { User } from '@types';
import { API_USER_URL } from 'services';

export type UseUserProps = {
  id: number;
  initial?: User;
};

export type UseUser = {
  user?: User;
  isLoading: boolean;
  isError: boolean;
};

/**
 * 사용자 API(개별 취득)의 커스텀훅
 * @param context API 컨텍스트
 * @returns 사용자와 API 호출 상태
 */
const useUser = ({ id, initial }: UseUserProps): UseUser => {
  // TOD key 관리 고민
  const { data, error } = useSWR<User>(`${API_USER_URL}/users/${id}`);

  return {
    user: data ?? initial,
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useUser;
