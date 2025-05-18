import { vars } from 'theme.css';
import { style } from '@vanilla-extract/css';

export const linkStyles = style({
  textDecoration: 'underline',
  color: vars.colors.grey[900],
});
