import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Box from 'components/layout/Box';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Box backgroundColor="orange">
        <div>테스트</div>
      </Box>
    </div>
  );
};

export default Home;
