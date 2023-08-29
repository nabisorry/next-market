import styled from 'styled-components';
import ScaleImage from 'components/atoms/ScaleImage';
import Text from 'components/atoms/Text';
import Box from 'components/layout/Box';

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  blurDataUrl?: string;
  variant?: 'listing' | 'small' | 'detail';
}

// 상품 카드 컨테이너
const ProductCardContainer = styled.div`
  position: relative;
`;

// 상품 카드 이미지 컨테이너
const ProductCardImageContainer = styled.div`
  z-index: 99;
`;

// 상품 카드 정보
const ProductCardInfo = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
`;

// TODO Card, CardImg atom or molecules 분리 고민? but price 라는 도메인 지식에 의존하는 데이터
const ProductCard = ({
  title,
  price,
  imageUrl,
  blurDataUrl,
  variant = 'listing',
}: ProductCardProps) => {
  const { size, imgSize } = (() => {
    switch (variant) {
      case 'detail':
        return { size: { base: '320px', md: '540px' }, imgSize: 540 };
      case 'listing':
        return { size: { base: '160px', md: '240px' }, imgSize: 240 };
      default:
        return { size: { base: '160px' }, imgSize: 160 };
    }
  })();

  return (
    <ProductCardContainer>
      {variant !== 'small' && (
        <ProductCardInfo>
          <Box>
            <Text
              as="h2"
              fontSize={{ base: 'small', md: 'mediumLarge' }}
              letterSpacing={{ base: 2, md: 3 }}
              lineHeight={{ base: '32px', md: '48px' }}
              backgroundColor="white"
              margin={0}
              paddingRight={2}
              paddingLeft={2}
              paddingTop={0}
              paddingBottom={0}
            >
              {title}
            </Text>
            <Text
              as="span"
              fontWeight="bold"
              display="inline-block"
              backgroundColor="white"
              fontSize={{ base: 'extraSmall', md: 'medium' }}
              lineHeight={{ base: '8px', md: '12px' }}
              letterSpacing={{ base: 2, md: 4 }}
              margin={0}
              padding={{ base: 1, md: 2 }}
            >
              {price}원
            </Text>
          </Box>
        </ProductCardInfo>
      )}
      <ProductCardImageContainer>
        {blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            width={imgSize ?? 240}
            height={imgSize ?? 240}
            containerWidth={size}
            containerHeight={size}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            alt="상품 이미지"
          />
        )}
        {!blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            width={imgSize ?? 240}
            height={imgSize ?? 240}
            containerWidth={size}
            containerHeight={size}
            alt="상품 이미지"
          />
        )}
      </ProductCardImageContainer>
      {variant === 'small' && (
        <Box marginTop={1}>
          <Text as="h2" variant="medium" margin={0} padding={0}>
            {title}
          </Text>
          <Text as="span" variant="medium">
            {price}원
          </Text>
        </Box>
      )}
    </ProductCardContainer>
  );
};

export default ProductCard;
