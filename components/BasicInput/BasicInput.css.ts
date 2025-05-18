import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'theme.css';

export const inputWrapperStyles = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[50],
  position: 'relative',
});

export const inputWrapperWidthVariants = styleVariants({
  fullWidth: {
    width: '100%',
    maxWidth: '100%',
  },
  default: {
    width: '100%',
    maxWidth: '20rem',
  },
});

export const inputStyles = style({
  border: '.0625rem solid',
  backgroundColor: vars.colors.white.white,
  borderRadius: vars.spacing[100],
  height: '2.8125rem',
  fontFamily: vars.font,
  fontSize: '.875rem',
  lineHeight: '150%',
  fontWeight: 'normal',
  letterSpacing: '0rem',
  color: vars.colors.grey[900],
  '::placeholder': {
    color: vars.colors.grey[500],
  },
});

export const inputStylesBorderVariants = styleVariants({
  error: {
    borderColor: vars.colors.secondary.red,
  },
  default: {
    borderColor: vars.colors.beige[500],
  },
});

export const helperTextStyles = style({
  textAlign: 'right',
  paddingTop: vars.spacing[50],
});

export const inputPaddingVariants = styleVariants({
  icon: {
    padding: `${vars.spacing[150]} ${vars.spacing[400]} ${vars.spacing[150]} ${vars.spacing[250]}`,
  },
  default: {
    padding: `${vars.spacing[150]} ${vars.spacing[250]}`,
  },
});

export const iconButtonStyles = style({
  background: 'rgba(0, 0, 0, 0)',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  width: vars.spacing[200],
  height: vars.spacing[200],
  position: 'absolute',
  color: vars.colors.grey[900],
  right: '14.5px',
  top: '50%',
});
