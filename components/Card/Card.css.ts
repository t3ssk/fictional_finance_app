import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'theme.css';
import { mediaQuery } from 'utils/mediaQuery';

export const cardStyles = style({
  backgroundColor: vars.colors.white.white,
  borderRadius: vars.spacing[150],
  width: '100%',
  height: '100%',
});

export const cardColorVariants = styleVariants({
  default: {
    backgroundColor: vars.colors.white.white,
  },
  dark: {
    backgroundColor: vars.colors.grey[900],
  },
  beige: {
    backgroundColor: vars.colors.beige[100],
  },
});

export const cardPaddingVariants = styleVariants({
  large: {
    padding: vars.spacing[400],
    '@media': {
      [mediaQuery.mobile]: {
        padding: `${vars.spacing[300]} ${vars.spacing[250]}`,
      },
    },
  },
  medium: {
    padding: vars.spacing[300],
    '@media': {
      [mediaQuery.mobile]: {
        padding: vars.spacing[250],
      },
    },
  },
});
