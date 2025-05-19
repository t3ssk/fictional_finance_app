import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'theme.css';
import { mediaQuery } from 'utils/mediaQuery';

export const balanceRowStyles = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing[300],
  paddingBottom: vars.spacing[400],
  '@media': {
    [mediaQuery.mobile]: {
      gap: vars.spacing[150],
      flexDirection: 'column',
    },
  },
});

export const mainContentWrapperStyles = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: vars.spacing[300],
  '@media': {
    [mediaQuery.tablet]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(4, 1fr)',
    },
  },
});

export const potsStyles = style({
  gridArea: '1 / 1 / 2 / 2',
  '@media': {
    [mediaQuery.tablet]: {
      gridArea: ' 1 / 1 / 2 / 2',
    },
  },
});

export const potsHeaderStyles = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: vars.spacing[250],
});

export const potsLinkStyles = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[150],
  textDecoration: 'none',
  cursor: 'pointer',
});

export const potsLinkWrapperStyles = style({
  textDecoration: 'none',
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

export const cardTitleStyles = style({
  paddingBottom: vars.spacing[150],
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

export const potsTitleStyles = style({
  paddingBottom: vars.spacing[50],
});

export const potsItemStyles = style({
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

export const potsItemBorderStyleVariants = styleVariants({
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
