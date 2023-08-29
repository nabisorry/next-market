import useSWR from 'swr';
import type { User } from '@types';
import { createContext, useContext, useMemo } from 'react';
import { signin, signout } from 'services/auth';
import { API_BASE_URL } from 'services';

type AuthContextType = {
  authUser?: User;
  isLoading: boolean;
};

type AuthActionsContextType = {
  signin: (username: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
  mutate: (
    data?: User | Promise<User>,
    shouldRevalidate?: boolean,
  ) => Promise<User | undefined>;
};

const AuthContext = createContext<AuthContextType>({
  authUser: undefined,
  isLoading: false,
});

const AuthActionsContext = createContext<AuthActionsContextType>({
  signin: async () => Promise.resolve(),
  signout: async () => Promise.resolve(),
  mutate: async () => Promise.resolve(undefined),
});

export const useAuthContext = () => useContext(AuthContext);
export const useAuthActionsContext = () => useContext(AuthActionsContext);

type AuthContextProviderProps = {
  children?: React.ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { data, error, mutate } = useSWR<User>(`${API_BASE_URL}/users/me`);

  const isLoading = !data && !error;

  const actions = useMemo(
    () => ({
      async signin(username: string, password: string) {
        await signin({ username, password });
        await mutate();
      },
      async signout() {
        await signout();
        await mutate();
      },
      mutate,
    }),
    [mutate],
  );

  return (
    <>
      <AuthActionsContext.Provider
        value={{
          ...actions,
        }}
      >
        <AuthContext.Provider
          value={{
            authUser: data,
            isLoading,
          }}
        >
          {children}
        </AuthContext.Provider>
      </AuthActionsContext.Provider>
    </>
  );
};

export default AuthContextProvider;
