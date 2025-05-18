import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'theme.css';
import { mediaQuery } from 'utils/mediaQuery';

export const sidebarItemStyle = style({
  width: '100%',
  display: 'flex',
  height: '56px',
  alignItems: 'center',
  gap: vars.spacing[200],
  paddingLeft: vars.spacing[400],
  fontFamily: vars.font,
  fontWeight: 'bold',
  lineHeight: '150%',
  fontSize: vars.spacing[200],
  cursor: 'pointer',
  transition: '0.2s ease-in-out',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textDecoration: 'none',
  borderRadius: `0 ${vars.spacing[200]} ${vars.spacing[200]} 0`,
  borderLeft: `${vars.spacing[50]} solid rgba(0, 0, 0, 0)`,
  ':hover': {
    color: vars.colors.white.white,
  },
  '@media': {
    [mediaQuery.tablet]: {
      width: '100%',
      flexDirection: 'column',
      height: '100%',
      gap: vars.spacing[50],
      paddingLeft: '0px',
      alignItems: 'center',
      justifyContent: 'center',
      borderLeft: 'none',
      borderBottom: `${vars.spacing[50]} solid rgba(0, 0, 0, 0)`,
      borderRadius: `${vars.spacing[100]} ${vars.spacing[100]} 0 0`,
    },
    [mediaQuery.mobile]: {
      flex: '1 1 auto',
    },
  },
});

export const sidebarItemStateVariantStyle = styleVariants({
  active: {
    color: vars.colors.grey[900],
    backgroundColor: vars.colors.white.white,
    borderColor: vars.colors.secondary.green,
    ':hover': {
      backgroundColor: vars.colors.white.white,
      color: vars.colors.grey[900],
    },
    '@media': {
      [mediaQuery.tablet]: {
        borderColor: vars.colors.secondary.green,
      },
    },
  },
  inactive: {
    color: vars.colors.grey[300],
  },
});

export const sidebarItemOpenVariantStyle = styleVariants({
  closed: {
    borderRadius: `0 0`,
  },
  open: {
    borderRadius: `0 ${vars.spacing[200]} ${vars.spacing[200]} 0`,
  },
});

export const iconStyle = style({
  width: '24px',
  height: '24px',
  flexShrink: 0,
});

export const sidebarItemTextOpenVariantStyle = styleVariants({
  closed: {
    opacity: '0',
    '@media': {
      [mediaQuery.tablet]: {
        opacity: '1',
      },
      [mediaQuery.mobile]: {
        opacity: '0',
        height: '0px',
        width: '0px',
      },
    },
  },
  open: {
    opacity: '1',
    '@media': {
      [mediaQuery.mobile]: {
        opacity: '0',
        height: '0px',
        width: '0px',
      },
    },
  },
});
