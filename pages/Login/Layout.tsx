import { ReactNode } from 'react';
import {
  contentSectionStyles,
  descriptionSectionStyles,
  heroSectionBackgroundStyles,
  heroSectionStyles,
  loginPageStyles,
  logoStyles,
} from './Login.css';
import { Typography } from 'components/Typography/Typography';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={loginPageStyles}>
      <div className={heroSectionStyles}>
        <div className={heroSectionBackgroundStyles}>
          <a className={logoStyles} href="/" title="finance app"></a>
          <div className={descriptionSectionStyles}>
            <Typography component="h2" preset="preset1">
              Keep track of your money and save for your future
            </Typography>
            <Typography preset="preset4">
              Personal finance app puts you in control of your spending. Track transactions, set
              budgets, and add to savings pots easily.{' '}
            </Typography>
          </div>
        </div>
      </div>
      <div className={contentSectionStyles}>{children}</div>
    </div>
  );
};
