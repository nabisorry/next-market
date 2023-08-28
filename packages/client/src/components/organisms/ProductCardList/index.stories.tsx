import { Meta, StoryFn } from '@storybook/react';
import ProductCardList from './index';
import ProductCard from '../ProductCard';

export default {
  title: 'Organisms/ProductCardList',
  argTypes: {
    numberPerRow: {
      defaultValue: 4,
      description: '1행에 표시할 수 있는 상품 수',
      table: {
        type: { summary: 'number' },
      },
    },
    numberPerRowForMobile: {
      defaultValue: 2,
      description: '1행에 표시할 수 있는 상품 수 (모바일)',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta<typeof ProductCardList>;

// TODO 모바일 컨트롤러 구현
export const Standard = () => (
  <ProductCardList>
    <ProductCard title="제품1" price={2000} imageUrl="/images/sample/1.jpg" />
    <ProductCard title="제품2" price={3000} imageUrl="/images/sample/2.jpg" />
    <ProductCard title="제품3" price={7000} imageUrl="/images/sample/3.jpg" />
    <ProductCard title="제품4" price={21000} imageUrl="/images/sample/4.jpg" />
    <ProductCard title="제품5" price={600} imageUrl="/images/sample/5.jpg" />
  </ProductCardList>
);
