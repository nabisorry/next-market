import React, { useState, useContext, createContext, useMemo } from 'react';

const GlobalSpinnerContext = createContext<boolean>(false);

type GlobalSpinnerActionsContextType = {
  setGlobalSpinner(value: boolean): void;
};

// action 리랜더링을 방지하기 위해 값과 액션 함수를 분리
const GlobalSpinnerActionsContext =
  createContext<GlobalSpinnerActionsContextType>({
    setGlobalSpinner: () => {},
  }); // 빈함수를 통한 에러 방지

type GlobalSpinnerContextProviderProps = {
  children?: React.ReactNode;
};

const GlobalSpinnerContextProvider = ({
  children,
}: GlobalSpinnerContextProviderProps) => {
  const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false);

  // 액션 함수 메모이제이션
  const actions = useMemo(
    () => ({
      setGlobalSpinner(value: boolean) {
        setGlobalSpinner(value);
      },
    }),
    [],
  );

  return (
    <GlobalSpinnerActionsContext.Provider value={actions}>
      <GlobalSpinnerContext.Provider value={isGlobalSpinnerOn}>
        {children}
      </GlobalSpinnerContext.Provider>
    </GlobalSpinnerActionsContext.Provider>
  );
};

// context 조회,액션 커스텀 훅
export const useGlobalSpinnerContext = () =>
  useContext<boolean>(GlobalSpinnerContext);

export const useGlobalSpinnerActionsContext = () =>
  useContext(GlobalSpinnerActionsContext);

export default GlobalSpinnerContextProvider;
