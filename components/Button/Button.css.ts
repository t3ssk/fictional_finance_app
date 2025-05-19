import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

export const buttonStyles = style({
  minWidth: '7.0625rem',
  height: '3.3125rem',
  padding: '1rem',
  borderRadius: '.5rem',
  fontSize: '.875rem',
  lineHeight: '150%',
  letterSpacing: '0rem',
  transition: '0.2s ease-in-out',
  cursor: 'pointer',
  fontFamily: vars.font,
  ':disabled': {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
});
export const buttonStylesVisualVariants = styleVariants({
  primary: {
    backgroundColor: vars.colors.grey[900],
    color: vars.colors.white.white,
    border: `.0625rem solid rgba(0, 0, 0, 0)`,
    fontWeight: 'bold',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.colors.grey[500],
      },
    },
  },
  secondary: {
    color: vars.colors.grey[900],
    backgroundColor: vars.colors.grey[100],
    fontWeight: 'bold',
    border: `.0625rem solid rgba(0, 0, 0, 0)`,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.colors.white.white,
        border: `.0625rem solid ${vars.colors.grey[900]}`,
      },
    },
  },
  tertiary: {
    padding: '0rem',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: vars.colors.grey[500],
    fontWeight: 'regular',
    selectors: {
      '&:hover:not(:disabled)': {
        color: vars.colors.grey[900],
      },
    },
  },
  destroy: {
    backgroundColor: vars.colors.secondary.red,
    color: vars.colors.white.white,
    fontWeight: 'bold',
    opacity: '1',
    selectors: {
      '&:hover:not(:disabled)': {
        opacity: '0.8',
      },
    },
  },
});
export const buttonStylesFullWidthVariants = styleVariants({
  true: {
    width: '100%',
  },
  false: {
    width: 'fit-content',
  },
});
