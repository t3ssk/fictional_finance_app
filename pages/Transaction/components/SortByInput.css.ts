import { style } from '@vanilla-extract/css';
import { vars } from 'theme.css';
import { mediaQuery } from 'utils/mediaQuery';

export const nowrap = style({
  whiteSpace: 'nowrap',
});

export const individualSortRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[150],
  '@media': {
    [mediaQuery.mobile]: {
      display: 'none',
    },
  },
});

export const individualSortRowMobile = style({
  display: 'none',
  '@media': {
    [mediaQuery.mobile]: {
      display: 'block',
    },
  },
});
export const individualSortRowMobileButton = style({
  border: 'none',
  background: 'rgba(0, 0, 0, 0)',
  color: vars.colors.grey[900],
});

export const wrapper = style({ position: 'relative' });

export const dropdown = style({
  position: 'absolute',
  top: 'calc(100%) + 10px',
  right: 0,
  backgroundColor: vars.colors.white.white,
  width: '100%',
  minWidth: '114px',
  maxWidth: '177px',
  borderRadius: '8px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  padding: `${vars.spacing[150]} ${vars.spacing[250]}`,
  listStyle: 'none',
});

export const dropdownItem = style({
  border: 'none',
  background: 'rgba(0, 0, 0, 0)',
  paddingBlock: '0px',
  width: '100%',
  textAlign: 'left',
  padding: 0,
  height: '100%',
});

export const dropdownItemWrapper = style({
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: vars.spacing[150],
  paddingTop: vars.spacing[150],
  borderBottom: `1px solid ${vars.colors.grey[100]}`,

  selectors: {
    '&:last-child': {
      paddingBottom: 0,
      borderBottom: 'none',
    },
    '&:first-child': {
      paddingTop: 0,
    },
  },
});
