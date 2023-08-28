import styled from 'styled-components';
import type { Responsive } from 'types/styles';
import { Color, Space, generateStyles } from 'utils/styles';

export type BoxProps = {
  color?: Responsive<Color>;
  backgroundColor?: Responsive<Color>;
  width?: Responsive<string>;
  height?: Responsive<string>;
  minWidth?: Responsive<string>;
  minHeight?: Responsive<string>;
  display?: Responsive<string>;
  border?: Responsive<string>;
  overflow?: Responsive<string>;
  margin?: Responsive<Space>;
  marginTop?: Responsive<Space>;
  marginRight?: Responsive<Space>;
  marginBottom?: Responsive<Space>;
  marginLeft?: Responsive<Space>;
  padding?: Responsive<Space>;
  paddingTop?: Responsive<Space>;
  paddingRight?: Responsive<Space>;
  paddingBottom?: Responsive<Space>;
  paddingLeft?: Responsive<Space>;
};

const styleKeysForBox: (keyof BoxProps)[] = [
  'color',
  'backgroundColor',
  'width',
  'height',
  'minWidth',
  'minHeight',
  'display',
  'border',
  'overflow',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
];

const Box = styled.div<BoxProps>`
  ${(props) => generateStyles(props, styleKeysForBox)}
`;

export default Box;
