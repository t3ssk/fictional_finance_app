import { style } from '@vanilla-extract/css';
import { vars } from 'theme.css';
import { mediaQuery } from 'utils/mediaQuery';

export const potsStyles = style({
  gridArea: '1 / 1 / 2 / 2',
  '@media': {
    [mediaQuery.tablet]: {
      gridArea: ' 1 / 1 / 2 / 2',
    },
  },
});

export const potsCardStyles = style({
  display: 'flex',
  gap: vars.spacing[200],
  flex: '0 0 247px',
  '@media': {
    [mediaQuery.mobile]: {
      flex: '0 0 100%',
    },
  },
});

export const potsWrapperStyle = style({
  display: 'flex',
  gap: vars.spacing[250],
  '@media': {
    [mediaQuery.mobile]: {
      flexDirection: 'column',
    },
  },
});

export const potsListStyles = style({
  display: 'flex',
  flexWrap: 'wrap',
  flex: '1 1 auto',
  gap: vars.spacing[200],
});
