import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'theme.css';
import { mediaQuery } from 'utils/mediaQuery';

export const pageContentStyles = style({
  padding: vars.spacing[500],
  flex: '1 1 auto',
  backgroundColor: vars.colors.beige[100],
  transition: 'all 0.3s ease-in-out',

  '@media': {
    [mediaQuery.tablet]: {
      padding: `${vars.spacing[300]} ${vars.spacing[200]}`,
      maxHeight: 'calc(100vh - 3.25rem)',
      overflowY: 'scroll',
    },
  },
});

export const pageContentMenuExpandedStyles = styleVariants({
  expanded: {
    width: 'calc(100% - 18.75rem)',
    marginLeft: '18.75rem',
    '@media': {
      [mediaQuery.tablet]: {
        width: '100%',
        marginLeft: 0,
      },
    },
  },
  collapsed: {
    width: 'calc(100% - 5.5rem)',
    marginLeft: '5.5rem',
    '@media': {
      [mediaQuery.tablet]: {
        width: '100%',
        marginLeft: 0,
      },
    },
  },
});

export const pageTitleStyles = style({
  marginBottom: vars.spacing[400],
});
