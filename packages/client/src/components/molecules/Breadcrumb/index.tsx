import Flex from 'components/layout/Flex';
import { ReactNode } from 'react';
import styled from 'styled-components';

const BreadcrumbRoot = styled(Flex)`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

type BreadcrumbProps = {
  children?: ReactNode;
};

const Breadcrumb = ({ children }: BreadcrumbProps) => (
  <BreadcrumbRoot>{children}</BreadcrumbRoot>
);

export default Breadcrumb;
