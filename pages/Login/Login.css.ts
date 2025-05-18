import { style } from '@vanilla-extract/css';
import { vars } from 'theme.css';
import { mediaQuery } from 'utils/mediaQuery';

export const loginPageStyles = style({
  backgroundColor: vars.colors.beige[100],
  width: '100%',
  height: '100vh',
  display: 'flex',
  '@media': {
    [mediaQuery.tablet]: {
      flexDirection: 'column',
    },
  },
});

export const heroSectionStyles = style({
  padding: vars.spacing[250],
  flex: '0 0 41%',
  '@media': {
    [mediaQuery.tablet]: {
      padding: 0,
      flex: '0 0 70px',
    },
  },
});

export const heroSectionBackgroundStyles = style({
  backgroundImage: `url("../../assets/images/illustration-authentication.svg")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  height: '100%',
  borderRadius: vars.spacing[150],
  padding: vars.spacing[500],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@media': {
    [mediaQuery.tablet]: {
      backgroundImage: 'none',
      backgroundColor: vars.colors.grey[900],
      borderRadius: `0 0 ${vars.spacing[150]} ${vars.spacing[150]}`,
      alignItems: 'center',
      padding: vars.spacing[300],
    },
  },
});

export const logoStyles = style({
  backgroundImage: `url("../../assets/images/logo-large.svg")`,
  width: '122px',
  height: '22px',
  display: 'block',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

export const descriptionSectionStyles = style({
  color: vars.colors.white.white,
  '@media': {
    [mediaQuery.tablet]: {
      display: 'none',
    },
  },
});

export const contentSectionStyles = style({
  display: 'grid',
  placeItems: 'center',
  height: '100%',
  flex: '1 1 auto',
});

export const loginFormStyles = style({
  maxWidth: '560px',
  width: '100%',
  minHeight: '422px',
  '@media': {
    [mediaQuery.mobile]: {
      height: '406px',
      maxWidth: '100%',
      padding: vars.spacing[200],
    },
  },
});

export const loginFormCardContentStyles = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[400],
});

export const signupLinkStyles = style({
  textAlign: 'center',
});
