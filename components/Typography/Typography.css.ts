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
    fontSize: '32px',
  },
  20: {
    fontSize: '20px',
  },
  16: {
    fontSize: '16px',
  },
  14: {
    fontSize: '14px',
  },
  12: {
    fontSize: '12px',
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
    fontSize: '32px',
    lineHeight: '120%',
    fontWeight: 'normal',
    letterSpacing: '0px',
  },
  preset2: {
    fontSize: '20px',
    lineHeight: '120%',
    fontWeight: 'normal',
    letterSpacing: '0px',
  },
  preset3: {
    fontSize: '16px',
    lineHeight: '150%',
    fontWeight: 'normal',
    letterSpacing: '0px',
  },
  preset4: {
    fontSize: '14px',
    lineHeight: '150%',
    fontWeight: 'normal',
    letterSpacing: '0px',
  },
  preset4bold: {
    fontSize: '14px',
    lineHeight: '150%',
    fontWeight: 'bold',
    letterSpacing: '0px',
  },
  preset5: {
    fontSize: '12px',
    lineHeight: '150%',
    fontWeight: 'normal',
    letterSpacing: '0px',
  },
  preset5bold: {
    fontSize: '12px',
    lineHeight: '150%',
    fontWeight: 'bold',
    letterSpacing: '0px',
  },
});
