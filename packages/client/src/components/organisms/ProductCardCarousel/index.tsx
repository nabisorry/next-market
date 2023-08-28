import Flex from 'components/layout/Flex';

type ProductCardCarouselProps = {
  children?: React.ReactNode;
};

const ProductCardCarousel = ({ children }: ProductCardCarouselProps) => {
  return (
    <Flex overflow={{ base: 'scroll', md: 'hidden' }} width="100%">
      {children}
    </Flex>
  );
};

export default ProductCardCarousel;
