import Link from 'next/link';
import styled from 'styled-components';
import { GitHubIcon } from 'components/atoms/IconButton';
import Text from 'components/atoms/Text';
import Box from 'components/layout/Box';
import Flex from 'components/layout/Flex';

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <footer>
      <Flex justifyContent="center">
        <Box marginBottom={2} margin="0 10px">
          <Link href="/" passHref>
            <Anchor>홈</Anchor>
          </Link>
        </Box>
        <Box marginBottom={2} margin="0 10px">
          <Link href="/" passHref>
            <Anchor>채용</Anchor>
          </Link>
        </Box>
        <Box marginBottom={2} margin="0 10px">
          <Link href="/" passHref>
            <Anchor>알림</Anchor>
          </Link>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Box paddingTop={3} paddingBottom={2}>
          <Text color="gray">© 2023 nabisorry </Text>
        </Box>
      </Flex>
    </footer>
  );
};

export default Footer;
