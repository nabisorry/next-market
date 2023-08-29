import Link from 'next/link';
import { Fragment } from 'react';
import ProductCard from 'components/organisms/ProductCard';
import ProductCardList from 'components/organisms/ProductCardList';
import type { Product } from '@types';
import useSearch from 'hooks/useSearch';

type UserProductCardListContainerProps = {
  userId: number;
  products?: Product[];
};

const UserProductCardListContainer = ({
  userId,
  products,
}: UserProductCardListContainerProps) => {
  // 사용자가 소요한 상품
  const { products: userProducts } = useSearch({
    userId,
    initial: products,
  });

  return (
    <ProductCardList numberPerRow={6} numberPerRowForMobile={2}>
      {userProducts.map((p) => (
        <Fragment key={p.id}>
          <Link href={`/products/${p.id}`} passHref>
            <ProductCard
              variant="small"
              title={p.title}
              price={p.price}
              imageUrl={p.imageUrl}
            />
          </Link>
        </Fragment>
      ))}
    </ProductCardList>
  );
};

export default UserProductCardListContainer;
