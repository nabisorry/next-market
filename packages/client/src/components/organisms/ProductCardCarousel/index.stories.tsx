import { Meta, StoryFn } from '@storybook/react';
import ProductCardCarousel from './index';
import ProductCard from '../ProductCard';

export default {
  title: 'Organisms/ProductCardCarousel',
} as Meta<typeof ProductCardCarousel>;

export const Standard = () => (
  <ProductCardCarousel>
    <ProductCard title="제품1" price={2000} imageUrl="/images/sample/1.jpg" />
  </ProductCardCarousel>
);
