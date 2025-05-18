import { style } from '@vanilla-extract/css';
import { vars } from 'theme.css';
import { mediaQuery } from 'utils/mediaQuery';

export const cardStyles = style({
  backgroundColor: vars.colors.white.white,
  borderRadius: vars.spacing[150],
  padding: vars.spacing[400],
  width: '100%',
  height: '100%',
  '@media': {
    [mediaQuery.mobile]: {
      padding: `${vars.spacing[300]} ${vars.spacing[250]}`,
    },
  },
});
