import type { InferGetStaticPropsType, NextPage } from 'next';
import Box from 'components/layout/Box';
import Flex from 'components/layout/Flex';
import Text from 'components/atoms/Text';
import { getAllProducts } from 'services/products';
import ProductCardCarousel from 'components/organisms/ProductCardCarousel';
import Link from 'next/link';
import ProductCard from 'components/organisms/ProductCard';
import { Product } from '@types';
import Layout from 'components/templates/Layout';

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<HomePageProps> = (props: HomePageProps) => {
  const { bookProducts, clothesProducts, shoesProducts } = props;

  const renderProductCardCarousel = (products: Product[]) => {
    return (
      <ProductCardCarousel>
        {products.map((p: Product, i: number) => (
          <Box paddingLeft={i === 0 ? 0 : 2} key={p.id}>
            <Link href={`/products/${p.id}`} passHref>
              <ProductCard
                variant="small"
                title={p.title}
                price={p.price}
                imageUrl={p.imageUrl}
              />
            </Link>
          </Box>
        ))}
      </ProductCardCarousel>
    );
  };

  return (
    <Layout>
      <Flex padding={2} justifyContent="center" backgroundColor="primary">
        <Flex
          width={{ base: '100%', md: '1040px' }}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box width="100%">
            <Text as="h1" marginBottom={0} color="white" variant="extraLarge">
              nabi market에서
            </Text>
            <Text as="h1" marginTop={0} color="white" variant="extraLarge">
              마음에 드는 아이템을 찾자
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex paddingBottom={2} justifyContent="center">
        <Box
          paddingLeft={{ base: 2, md: 0 }}
          paddingRight={{ base: 2, md: 0 }}
          width={{ base: '100%', md: '1040px' }}
        >
          <Box marginBottom={3}>
            <Text as="h2" variant="large">
              의류
            </Text>
            {renderProductCardCarousel(clothesProducts)}
          </Box>
          <Box marginBottom={3}>
            <Text as="h2" variant="large">
              책
            </Text>
            {renderProductCardCarousel(bookProducts)}
          </Box>
          <Box>
            <Text as="h2" variant="large">
              신발
            </Text>
            {renderProductCardCarousel(shoesProducts)}
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const [clothesProducts, bookProducts, shoesProducts] = await Promise.all([
    getAllProducts({ category: 'clothes', limit: 6, page: 1 }),
    getAllProducts({ category: 'book', limit: 6, page: 1 }),
    getAllProducts({ category: 'shoes', limit: 6, page: 1 }),
  ]);

  return {
    props: {
      clothesProducts,
      bookProducts,
      shoesProducts,
    },
    revalidate: 60,
  };
};

export default Home;
