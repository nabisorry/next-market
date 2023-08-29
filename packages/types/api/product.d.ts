export type ProductCategory = 'shoes' | 'clothes' | 'book';
export type ProductCondition = 'new' | 'used';

export type Product = {
  id: number;
  title: string;
  description: string;
  category: ProductCategory;
  imageUrl: string;
  price: number;
  condition: ProductCondition;
  owner: UserType;
};

export type Products = Product[];
