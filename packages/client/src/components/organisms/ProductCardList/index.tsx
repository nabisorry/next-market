import Grid from 'components/layout/Grid';

interface ProductCardListProps {
  // 1행에 표시할 상품 수
  numberPerRow?: number;
  // 모바일에서 1행에 표시할 상품 수
  numberPerRowForMobile?: number;
}

const ProductCardList = ({
  numberPerRow = 4,
  numberPerRowForMobile = 2,
  children,
}: React.PropsWithChildren<ProductCardListProps>) => {
  return (
    <Grid
      gridGap="16px"
      gridTemplateColumns={{
        base: `repeat(${numberPerRowForMobile}, 1fr)`,
        md: `repeat(${numberPerRow}, 1fr)`,
      }}
    >
      {children}
    </Grid>
  );
};

export default ProductCardList;
