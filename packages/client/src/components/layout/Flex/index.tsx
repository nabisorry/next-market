import styled from 'styled-components';
import Box, { BoxProps } from 'components/layout/Box';
import type {
  Responsive,
  CSSPropertyAlignItems,
  CSSPropertyAlignContent,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyFlexDirection,
  CSSPropertyJustifySelf,
  CSSPropertyFlexWrap,
  CSSPropertyAlignSelf,
} from 'types/styles';
import { generateStyles } from 'utils/styles';

type FlexProps = BoxProps & {
  alignItems?: Responsive<CSSPropertyAlignItems>;
  alignContent?: Responsive<CSSPropertyAlignContent>;
  justifyContent?: Responsive<CSSPropertyJustifyContent>;
  justifyItems?: Responsive<CSSPropertyJustifyItems>;
  flexWrap?: Responsive<CSSPropertyFlexWrap>;
  flexBasis?: Responsive<string>;
  flexDirection?: Responsive<CSSPropertyFlexDirection>;
  flexGrow?: Responsive<string>;
  flexShrink?: Responsive<string>;
  justifySelf?: Responsive<CSSPropertyJustifySelf>;
  alignSelf?: Responsive<CSSPropertyAlignSelf>;
  order?: Responsive<string>;
};

const styleKeysForFlex: (keyof FlexProps)[] = [
  'alignItems',
  'alignContent',
  'justifyContent',
  'justifyItems',
  'flexWrap',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'justifySelf',
  'alignSelf',
  'order',
];

// BOX 상속
const Flex = styled(Box)<FlexProps>`
  ${(props) => generateStyles(props, styleKeysForFlex)}
`;

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
