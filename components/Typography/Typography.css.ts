import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'theme.css';

export const typographyStyle = style({
  fontFamily: vars.font,
});

export const colorStyleVariants = styleVariants({
  unset: {},
  beige500: {
    color: vars.colors.beige[500],
  },
  beige100: {
    color: vars.colors.beige[100],
  },
  grey900: {
    color: vars.colors.grey[900],
  },
  grey500: {
    color: vars.colors.grey[500],
  },
  grey300: {
    color: vars.colors.grey[300],
  },
  grey100: {
    color: vars.colors.grey[100],
  },
  green: {
    color: vars.colors.secondary.green,
  },
  yellow: {
    color: vars.colors.secondary.yellow,
  },
  navy: {
    color: vars.colors.secondary.navy,
  },
  red: {
    color: vars.colors.secondary.red,
  },
  purpleSecondary: {
    color: vars.colors.secondary.purple,
  },
  white: {
    color: vars.colors.white.white,
  },
  purpleOther: {
    color: vars.colors.other.purple,
  },
  turquoise: {
    color: vars.colors.other.turquoise,
  },
  brown: {
    color: vars.colors.other.brown,
  },
  magenta: {
    color: vars.colors.other.magenta,
  },
  blue: {
    color: vars.colors.other.blue,
  },
  navyGrey: {
    color: vars.colors.other['navy-grey'],
  },
  armyGreen: {
    color: vars.colors.other['army-green'],
  },
  gold: {
    color: vars.colors.other.gold,
  },
  orange: {
    color: vars.colors.other.orange,
  },
});

export const fontSizeStyleVariants = styleVariants({
  unset: {},
  32: {
    fontSize: '2rem',
  },
  20: {
    fontSize: '1.25rem',
  },
  16: {
    fontSize: '1rem',
  },
  14: {
    fontSize: '.875rem',
  },
  12: {
    fontSize: '.75rem',
  },
});

export const fontWeightStyleVariants = styleVariants({
  bold: {
    fontWeight: 'bold',
  },
  normal: {
    fontWeight: 'normal',
  },
});

export const lineHeightStyleVariants = styleVariants({
  unset: {},
  120: {
    lineHeight: '120%',
  },
  150: {
    lineHeight: '150%',
  },
});

export const typographyCursorPointerStyle = style({
  cursor: 'pointer',
});

export const typographyPresetStyleVariants = styleVariants({
  preset1: {
    fontSize: '2rem',
    lineHeight: '120%',
    fontWeight: 'bold',
    letterSpacing: '0rem',
  },
  preset2: {
    fontSize: '1.25rem',
    lineHeight: '120%',
    fontWeight: 'bold',
    letterSpacing: '0rem',
  },
  preset3: {
    fontSize: '1rem',
    lineHeight: '150%',
    fontWeight: 'normal',
    letterSpacing: '0rem',
  },
  preset4: {
    fontSize: '.875rem',
    lineHeight: '150%',
    fontWeight: 'normal',
    letterSpacing: '0rem',
  },
  preset4bold: {
    fontSize: '.875rem',
    lineHeight: '150%',
    fontWeight: 'bold',
    letterSpacing: '0rem',
  },
  preset5: {
    fontSize: '.75rem',
    lineHeight: '150%',
    fontWeight: 'normal',
    letterSpacing: '0rem',
  },
  preset5bold: {
    fontSize: '.75rem',
    lineHeight: '150%',
    fontWeight: 'bold',
    letterSpacing: '0rem',
  },
});
