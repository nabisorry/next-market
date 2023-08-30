import useSWR from 'swr';
import type { Product } from '@types';
import { API_PRODUCT_URL } from 'services';

export type UseProductProps = {
  id: number;
  initial?: Product;
};

export type UseProduct = {
  product?: Product;
  isLoading: boolean;
  isError: boolean;
};

const useProduct = ({ id, initial }: UseProductProps): UseProduct => {
  const { data, error } = useSWR<Product>(`${API_PRODUCT_URL}/products/${id}`);

  return {
    product: data ?? initial,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useProduct;
