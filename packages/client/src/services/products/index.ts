import type { Product, ProductCategory, ProductCondition } from '@types';
import { productAxios } from 'services';

export type GetAllProductsParams = {
  category?: ProductCategory;
  conditions?: ProductCondition[];
  userId?: number;
  sort?: keyof Omit<Product, 'owner'>;
  order?: 'asc' | 'desc';
  limit?: number;
  page?: number;
};

/**
 * 제품 API(목록 취득)
 * @param params 상품 ID
 * @returns 상품 목록
 */
export const getAllProducts = async ({
  category,
  conditions,
  userId,
  page,
  limit,
  sort = 'id',
  order = 'desc',
}: GetAllProductsParams = {}): Promise<Product[]> => {
  const params = new URLSearchParams();

  category && params.append('category', category);
  conditions &&
    conditions.forEach((condition) => params.append('condition', condition));
  userId && params.append('owner.id', `${userId}`);
  page && params.append('_page', `${page}`);
  limit && params.append('_limit', `${limit}`);
  sort && params.append('_sort', sort);
  order && params.append('_order', order);
  const query = params.toString();

  return (await productAxios.get(query.length > 0 ? `?${query}` : '')).data;
};

export type GetProductParams = {
  id: number;
};

/**
 * 제품 API(개별 취득)
 * @param params 상품 ID
 * @returns 상품
 */
export const getProduct = async ({
  id,
}: GetProductParams): Promise<Product> => {
  return (await productAxios.get(`/${id}`)).data;
};

export type AddProductsParams = {
  product: Omit<Product, 'id'>; // id 속성 제외
};

/**
 * 제품 API(신규 추가)
 * @param context API 컨텍스트
 * @param params 신규 추가할 상품
 * @returns 신규 추가한 상품
 */
export const addProduct = async ({
  product,
}: AddProductsParams): Promise<Product> =>
  (await productAxios.post('', product)).data;
