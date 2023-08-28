import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Box from 'components/layout/Box';
import Button from 'components/atoms/Button';
import Flex from 'components/layout/Flex';
import Text from 'components/atoms/Text';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Box backgroundColor="orange">
        <div>테스트</div>
        <Flex>
          <Button fontSize="24px">클릭</Button>
          <Button fontSize="18px">클릭2</Button>
        </Flex>
        <Text variant="large" color="white">
          테스트!
        </Text>
      </Box>
    </div>
  );
};

export default Home;
