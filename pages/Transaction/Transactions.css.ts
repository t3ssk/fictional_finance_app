import { style } from '@vanilla-extract/css';
import { vars } from 'theme.css';
import { mediaQuery } from 'utils/mediaQuery';

export const filterRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media': {
    [mediaQuery.mobile]: {
      gap: vars.spacing[200],
    },
  },
});

export const sortRow = style({
  flex: '0 1 438px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: vars.spacing[300],
  '@media': {
    [mediaQuery.mobile]: {
      flex: '1 1 auto',
    },
  },
});

export const searchBar = style({
  flex: '0 1 320px',
  width: '100%',
  '@media': {
    [mediaQuery.mobile]: {
      flex: '1 1 auto',
    },
  },
});

export const sortByTime = style({
  maxWidth: '113px',
});

export const sortByType = style({
  maxWidth: '177px',
});
