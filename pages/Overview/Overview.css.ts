import { style } from '@vanilla-extract/css';
import { vars } from 'theme.css';
import { mediaQuery } from 'utils/mediaQuery';

export const balanceRowStyles = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing[300],
  paddingBottom: vars.spacing[400],
  '@media': {
    [mediaQuery.mobile]: {
      gap: vars.spacing[150],
      flexDirection: 'column',
    },
  },
});

export const mainContentWrapperStyles = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, auto)',
  gridTemplateRows: 'repeat(5, auto)',
  gap: vars.spacing[300],
  '@media': {
    [mediaQuery.tablet]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(4, auto)',
    },
  },
});

export const cardTitleStyles = style({
  paddingBottom: vars.spacing[150],
});

export const headerStyles = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: vars.spacing[250],
  justifySelf: 'flex-start',
  width: '100%',
});

export const linkStyles = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[150],
  textDecoration: 'none',
  cursor: 'pointer',
});

export const linkWrapperStyles = style({
  textDecoration: 'none',
});

export const pb50 = style({
  paddingBottom: vars.spacing[50],
});
