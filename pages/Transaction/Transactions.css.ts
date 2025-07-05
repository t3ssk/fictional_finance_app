import { style } from '@vanilla-extract/css';
import { vars } from 'theme.css';

export const filterRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const sortRow = style({
  flex: '0 1 438px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: vars.spacing[300],
});

export const individualSortRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[150],
});

export const searchBar = style({
  flex: '0 1 320px',
  width: '100%',
});

export const sortByTime = style({
  maxWidth: '113px',
});

export const sortByType = style({
  maxWidth: '177px',
});

export const nowrap = style({
  whiteSpace: 'nowrap',
});
