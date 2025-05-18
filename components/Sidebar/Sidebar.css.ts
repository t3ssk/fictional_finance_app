import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../theme.css';
import { mediaQuery } from 'utils/mediaQuery';

const grey = vars.colors.grey;

export const sidebarStyle = style({
  height: '100vh',
  width: '100%',
  backgroundColor: grey[900],
  borderRadius: `0rem ${vars.spacing[200]} ${vars.spacing[200]} 0rem`,
  paddingBottom: vars.spacing[300],
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[300],
  transition: 'all 0.3s ease-in-out',
  '@media': {
    [mediaQuery.tablet]: {
      position: 'absolute',
      top: 'calc(100vh - 4.625rem)',
      left: 0,
      borderRadius: `${vars.spacing[100]} ${vars.spacing[100]} 0rem 0rem`,
      width: '100%',
      height: '4.625rem',
      flexDirection: 'row',
      gap: '0rem',
      padding: `0rem ${vars.spacing[500]}`,
    },
    [mediaQuery.mobile]: {
      height: '3.25rem',
      top: 'calc(100vh - 3.25rem)',
      padding: `0rem ${vars.spacing[200]}`,
    },
  },
});

export const sidebarOpenVariants = styleVariants({
  closed: {
    maxWidth: '5.5rem',
    '@media': {
      [mediaQuery.tablet]: {
        maxWidth: '100%',
      },
      [mediaQuery.mobile]: {
        maxWidth: '100%',
      },
    },
  },
  open: {
    paddingRight: vars.spacing[300],

    maxWidth: '18.75rem',
    '@media': {
      [mediaQuery.tablet]: {
        paddingRight: vars.spacing[500],
        maxWidth: '100%',
      },
      [mediaQuery.mobile]: {
        paddingRight: vars.spacing[200],
      },
    },
  },
});

export const logoStyle = style({
  display: 'block',
  width: '100%',
  height: '6.3125rem',
  backgroundPositionY: 'center',
  backgroundPositionX: vars.spacing[400],
  backgroundRepeat: 'no-repeat',
  flex: '0 0 6.3125rem',
  '@media': {
    [mediaQuery.tablet]: {
      width: '0',
      height: '0',
      visibility: 'hidden',
      flex: '0 0 0',
    },
  },
});

export const logoStyleOpenVariants = styleVariants({
  closed: {
    backgroundImage: `url("../../assets/images/logo-small.svg")`,
    backgroundSize: '.8125rem 1.375rem',
  },
  open: {
    backgroundImage: `url("../../assets/images/logo-large.svg")`,
    backgroundSize: '7.625rem 1.375rem',
  },
});

export const toggleButtonStyle = style({
  border: 'rgba(0, 0, 0, 0)',
  background: 'rgba(0, 0, 0, 0)',
  color: grey[300],
  width: '100%',
  height: '3.5rem',
  flex: '0 0 3.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: vars.spacing[200],
  paddingLeft: vars.spacing[400],
  fontFamily: vars.font,
  fontWeight: 'bold',
  lineHeight: '150%',
  fontSize: vars.spacing[200],
  cursor: 'pointer',
  transition: 'color 0.2s ease-in-out',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  ':hover': {
    color: vars.colors.white.white,
  },
  '@media': {
    [mediaQuery.tablet]: {
      display: 'none',
    },
    [mediaQuery.mobile]: {
      display: 'none',
    },
  },
});

export const toggleButtonOpenVariant = styleVariants({
  closed: {
    scale: '-1',
    '@media': {
      [mediaQuery.mobile]: {
        scale: '0',
      },
    },
  },
  open: {},
});

export const sidebarItemsStyle = style({
  flex: '1 1 100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[50],
  '@media': {
    [mediaQuery.tablet]: {
      flexDirection: 'row',
      gap: 'unset',
      justifyContent: 'space-between',
    },
  },
});
