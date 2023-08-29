import AppLogo from 'components/atoms/AppLogo';
import Box from 'components/layout/Box';
import Flex from 'components/layout/Flex';
import Layout from 'components/templates/Layout';
import SigninFormContainer from 'containers/SigninFormContainer';
import { NextPage } from 'next';
// import { useRouter } from 'next/router';

const SigninPage: NextPage = () => {
  // const router = useRouter();

  const handleSignin = async (err?: Error) => {
    if (err) return;

    /**
     * null, undefined 이면 '/' 반환
     * redirect_to 쿼리 값을 가져옴
     * 만약 URL이 localhost:3000/signin?redirect_to=/dashboard와 같다면, router.query['redirect_to']는 /dashboard를 반환
     */
    // const path = (router.query['redirect_to'] as string) ?? '/';

    // await router.push(path);
    console.log('성공!');
  };

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Flex
          width="400px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box marginBottom={2}>
            <AppLogo />
          </Box>
          <Box width="100%">
            <SigninFormContainer onSignin={handleSignin} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default SigninPage;
