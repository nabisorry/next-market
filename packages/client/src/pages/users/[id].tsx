import BreadcrumbItem from 'components/atoms/BreadcrumbItem';
import Separator from 'components/atoms/Separator';
import Text from 'components/atoms/Text';
import Box from 'components/layout/Box';
import Flex from 'components/layout/Flex';
import Breadcrumb from 'components/molecules/Breadcrumb';
import Layout from 'components/templates/Layout';
import UserProfileContainer from 'containers/UserProfileContainer';
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAllUsers, getUser } from 'services/users';

type UserPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const UserPage: NextPage<UserPageProps> = (props: UserPageProps) => {
  const { id, user } = props;

  const router = useRouter();

  if (router.isFallback) return <div>Loading....</div>;

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Box width="1180px">
          <Box marginBottom={2}>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link href="/">
                  <Text>톱</Text>
                </Link>
              </BreadcrumbItem>
              {user && <BreadcrumbItem>{user.username}</BreadcrumbItem>}
            </Breadcrumb>
          </Box>
          <Box>
            <Box marginBottom={1}>
              <UserProfileContainer userId={id} user={user} />
            </Box>
            <Box marginBottom={1}>
              <Separator />
            </Box>
            {/*
              사용자 상품 카드 리스트 컨테이너
              사용자가 서유한 상품 카드 리스트를 표시한다. useSearch로 항상 최신 데이터를 얻는다.
            */}
            {/* <UserProductCardListContainer userId={id} products={products} /> */}
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const users = await getAllUsers();
  const paths = users.map((user) => `/users/${user.id}`);

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params) throw new Error('params is undefined!');

  const userId = Number(params.id);
  // TODO products 나중에 추가
  const [user] = await Promise.all([getUser({ id: userId })]);

  return {
    props: {
      id: userId,
      user,
      products: [],
    },
    revalidate: 10,
  };
};

export default UserPage;
