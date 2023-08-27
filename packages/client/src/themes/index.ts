import colors, { ColorsType } from './colors';
import fontSizes, { FontSizesType } from './fontSizes';
import letterSpacings from './letterSpacings';
import lineHeights from './lineHeights';
import space from './space';

export type ThemeType = {
  space: string[];
  fontSizes: FontSizesType;
  letterSpacings: string[];
  lineHeights: string[];
  colors: ColorsType;
};

export const theme: ThemeType = {
  space,
  fontSizes,
  letterSpacings,
  lineHeights,
  colors,
};
