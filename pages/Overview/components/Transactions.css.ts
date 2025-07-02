import { style } from '@vanilla-extract/css';
import { vars } from 'theme.css';

export const transactionsWrapperStyle = style({
  gridArea: '2 / 1 / 6 / 2',
});

export const transactionsListStyle = style({
  listStyle: 'none',
  padding: '12px 0 0 0',
  margin: 0,
});

export const transactionListItemStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 0',
  borderBottom: `1px solid ${vars.colors.grey[100]} `,
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

export const transactionAvatarStyle = style({
  flex: '0 0 40px',
  height: '40px',
  borderRadius: '50%',
  overflow: 'hidden',
  marginRight: '16px',
});

export const transactionPlaceholderStyle = style({
  backgroundColor: vars.colors.secondary.cyan,
  color: vars.colors.white.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const transactionNameStyle = style({
  flex: '1 1 auto',
});

export const transactionAmountStyle = style({
  flex: '0 0 70px',
  textAlign: 'right',
  whiteSpace: 'nowrap',
});

export const transactionDateStyle = style({
  whiteSpace: 'nowrap',
});
