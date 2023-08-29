import Link from 'next/link';
// ui 라이브러리 대체
import { Skeleton } from '@mui/material';
import Box from 'components/layout/Box';
import ProductCard from 'components/organisms/ProductCard';
import ProductCardList from 'components/organisms/ProductCardList';
import useSearch from 'hooks/useSearch';
import type { ProductCategory, ProductCondition } from '@types';

type ProductCardListContainerProps = {
  category?: ProductCategory;
  conditions?: ProductCondition[];
};

const ProductCardListContainer = ({
  category,
  conditions,
}: ProductCardListContainerProps) => {
  // 서치 커스텀 훅
  const { products, isLoading } = useSearch({
    category,
    conditions,
  });

  return (
    <ProductCardList>
      {isLoading &&
        Array.from(Array(16), (_, k) => (
          <Box key={k}>
            <Box display={{ base: 'none', md: 'block' }}>
              <Skeleton width={240} height={240} />
            </Box>
            <Box display={{ base: 'block', md: 'none' }}>
              <Skeleton width={160} height={160} />
            </Box>
          </Box>
        ))}
      {!isLoading &&
        products.map((p) => (
          <Box key={p.id}>
            <Link href={`/products/${p.id}`} passHref>
              <ProductCard
                variant="listing"
                title={p.title}
                price={p.price}
                imageUrl={p.imageUrl}
              />
            </Link>
          </Box>
        ))}
    </ProductCardList>
  );
};

export default ProductCardListContainer;
