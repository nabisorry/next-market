import useSWR from 'swr';
import type { ProductCategory, ProductCondition, Product } from '@types';
import { API_BASE_URL } from 'services';

export type UseSearchProps = {
  category?: ProductCategory;
  conditions?: ProductCondition[];
  userId?: number;
  sort?: keyof Omit<Product, 'owner'>;
  order?: 'asc' | 'desc';
  initial?: Product[];
};

export type UseSearch = {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
};

const useSearch = ({
  category,
  userId,
  conditions,
  initial,
  sort = 'id',
  order = 'desc',
}: UseSearchProps = {}): UseSearch => {
  const params = new URLSearchParams();

  category && params.append('category', category);
  userId && params.append('owner.id', `${userId}`);
  conditions &&
    conditions.forEach((condition) => params.append('condition', condition));
  sort && params.append('_sort', sort);
  order && params.append('_order', order);
  const query = params.toString();
  const { data, error } = useSWR<Product[]>(
    query.length > 0 ? `${API_BASE_URL}?${query}` : API_BASE_URL,
  );

  return {
    products: data ?? initial ?? [],
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useSearch;
