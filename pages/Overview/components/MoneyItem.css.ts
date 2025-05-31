import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'theme.css';

export const moneyItemStyles = style({
  flex: `0 0 calc(50% - 8px)`,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[50],
  paddingLeft: vars.spacing[200],
  position: 'relative',
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '4px',
      height: '100%',
      borderRadius: '2px',
    },
  },
});

export const moneyItemBorderStyleVariants = styleVariants({
  0: {
    selectors: {
      '&::before': {
        backgroundColor: vars.colors.secondary.green,
      },
    },
  },
  1: {
    selectors: {
      '&::before': {
        backgroundColor: vars.colors.secondary.cyan,
      },
    },
  },
  2: {
    selectors: {
      '&::before': {
        backgroundColor: vars.colors.other['navy-grey'],
      },
    },
  },
  3: {
    selectors: {
      '&::before': {
        backgroundColor: vars.colors.secondary.yellow,
      },
    },
  },
});
