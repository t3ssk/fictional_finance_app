import { style } from '@vanilla-extract/css';
import { vars } from 'theme.css';
import { mediaQuery } from 'utils/mediaQuery';

export const budgetCard = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxHeight: '100%',
});

export const budgetStyles = style({
  gridArea: '1 / 2 / 3 / 3',
  '@media': {
    [mediaQuery.tablet]: {
      gridArea: '3 / 1 / 4 / 2',
    },
  },
});

export const chartWrapperStyles = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '1 1 auto',
  '@media': {
    [mediaQuery.mobile]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
});

export const chartItemStyles = style({
  display: 'flex',
  flex: '0 0 105px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: vars.spacing[200],
  '@media': {
    [mediaQuery.mobile]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, auto)',
      gridTemplateRows: 'repeat(2, auto)',
    },
  },
});

export const chartStyles = style({
  flex: '1 1 auto',
  display: 'grid',
  placeContent: 'center',
  position: 'relative',
});

export const chartDescriptionStyles = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'grid',
  placeContent: 'center',
  textAlign: 'center',
});
