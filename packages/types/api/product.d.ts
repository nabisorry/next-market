import { UserType } from './user';

export type ProductCategoryType = 'shoes' | 'clothes' | 'book';
export type ProductConditionType = 'new' | 'used';

export type ProductType = {
  id: number;
  title: string;
  description: string;
  category: ProductCategoryType;
  imageUrl: string;
  price: number;
  condition: ProductConditionType;
  owner: UserType;
};

export type ProductsType = ProductType[];
