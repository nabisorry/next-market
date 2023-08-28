import styled from 'styled-components';
import type { Responsive } from 'types/styles';
import {
  toPropValue,
  Space,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  generateStyles,
} from 'utils/styles';

// 텍스트 변형
export type TextVariant =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'mediumLarge'
  | 'large'
  | 'extraLarge';

export type TextProps = {
  variant?: TextVariant;
  fontSize?: Responsive<FontSize>;
  fontWeight?: Responsive<string>;
  letterSpacing?: Responsive<LetterSpacing>;
  lineHeight?: Responsive<LineHeight>;
  textAlign?: Responsive<string>;
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

const styleKeysForText: (keyof TextProps)[] = [
  'fontSize',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'textAlign',
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

// text variant 설정
const variants = {
  extraSmall: {
    fontSize: 'extraSmall',
    letterSpacing: 0,
    lineHeight: 0,
  },
  small: {
    fontSize: 'small',
    letterSpacing: 1,
    lineHeight: 1,
  },
  medium: {
    fontSize: 'medium',
    letterSpacing: 2,
    lineHeight: 2,
  },
  mediumLarge: {
    fontSize: 'mediumLarge',
    letterSpacing: 3,
    lineHeight: 3,
  },
  large: {
    fontSize: 'large',
    letterSpacing: 4,
    lineHeight: 4,
  },
  extraLarge: {
    fontSize: 'extraLarge',
    letterSpacing: 5,
    lineHeight: 5,
  },
};

const Text = styled.span<TextProps>`
  ${({ variant, fontSize, letterSpacing, lineHeight, theme }) => {
    // 변형 스타일에 적용
    if (variant && variants[variant]) {
      const styles = [];
      !fontSize &&
        styles.push(
          toPropValue('font-size', variants[variant].fontSize, theme),
        );
      !letterSpacing &&
        styles.push(
          toPropValue('letter-spacing', variants[variant].letterSpacing, theme),
        );
      !lineHeight &&
        styles.push(
          toPropValue('line-height', variants[variant].lineHeight, theme),
        );
      return styles.join('\n');
    }
  }}
  ${(props) => generateStyles(props, styleKeysForText)}
`;

Text.defaultProps = {
  variant: 'medium',
  color: 'text',
};

export default Text;
