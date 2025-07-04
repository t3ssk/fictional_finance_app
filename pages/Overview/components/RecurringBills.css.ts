import { style } from '@vanilla-extract/css';
import { vars } from 'theme.css';
import { mediaQuery } from 'utils/mediaQuery';

export const recurringBillsWrapperStyles = style({
  gridArea: '3 / 2 / 6 / 3',
  height: '100%',
  '@media': {
    [mediaQuery.tablet]: {
      gridArea: '4/ 1 / 5 / 2',
    },
  },
});
export const billTabWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: vars.spacing[150],
  justifyContent: 'space-between',
  height: 'calc(100% - 40px)',
  padding: '20px 0',
});
export const billTabStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 16px',
  width: '100%',
  backgroundColor: vars.colors.beige[100],
  borderRadius: '8px',
  borderLeft: `4px solid`,
  selectors: {
    '&:first-child': {
      borderLeftColor: vars.colors.other.turquoise,
    },
    '&:nth-child(2)': {
      borderLeftColor: vars.colors.secondary.yellow,
    },
    '&:last-child': {
      borderLeftColor: vars.colors.secondary.cyan,
    },
  },
});
