import Separator from 'components/atoms/Separator';
import Box from 'components/layout/Box';
import Footer from 'components/organisms/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    {/* <Header /> */}
    <main>{children}</main>
    <Separator />
    <Box padding={3}>
      <Footer />
    </Box>
  </>
);

export default Layout;
