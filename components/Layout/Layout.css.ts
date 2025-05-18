import { style } from '@vanilla-extract/css';
import { vars } from 'theme.css';
import { mediaQuery } from 'utils/mediaQuery';

export const pageWrapperStyles = style({
  backgroundColor: vars.colors.beige[100],
  height: '100vh',
  width: '100%',
  display: 'flex',
});

export const pageContentStyles = style({
  padding: vars.spacing[500],
  '@media': {
    [mediaQuery.mobile]: {
      padding: `${vars.spacing[300]} ${vars.spacing[200]}`,
    },
  },
});
