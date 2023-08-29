import React, { useReducer, useContext, createContext, useMemo } from 'react';
import type { Product } from '@types';
import { ADD_PRODUCT, REMOVE_PRODUCT, shopReducer } from './reducers';

type ShoppingCartContextType = {
  cart: Product[];
};

type ShoppingCartActionsContextType = {
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextType>({
  cart: [],
});

const ShoppingCartActionsContext =
  createContext<ShoppingCartActionsContextType>({
    addProductToCart: () => {},
    removeProductFromCart: () => {},
  });

export const useShoppingCartContext = (): ShoppingCartContextType =>
  useContext<ShoppingCartContextType>(ShoppingCartContext);

export const useShoppingCartActionsContext =
  (): ShoppingCartActionsContextType =>
    useContext<ShoppingCartActionsContextType>(ShoppingCartActionsContext);

interface ShoppingCartContextProviderProps {
  children?: React.ReactNode;
}

export const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartContextProviderProps) => {
  // 로직을 reducer로 분리해서 관리
  const [cartState, dispatch] = useReducer(shopReducer, []);

  const acions = useMemo(
    () => ({
      addProductToCart(product: Product) {
        dispatch({ type: ADD_PRODUCT, payload: product });
      },
      removeProductFromCart(id: number) {
        dispatch({ type: REMOVE_PRODUCT, payload: id });
      },
    }),
    [dispatch],
  );

  return (
    <ShoppingCartActionsContext.Provider value={{ ...acions }}>
      <ShoppingCartContext.Provider value={{ cart: cartState }}>
        {children}
      </ShoppingCartContext.Provider>
    </ShoppingCartActionsContext.Provider>
  );
};
