import { Link } from '@remix-run/react';
import { CaretRight } from 'components/Icons';
import { Typography } from 'components/Typography/Typography';
import { headerStyles, linkWrapperStyles, linkStyles } from '../Overview.css';

type HeaderProps = {
  title: string;
  link: string;
};

export const Header = ({ title, link }: HeaderProps) => {
  return (
    <div className={headerStyles}>
      <Typography preset="preset2" color="grey900" component="h2">
        {title}
      </Typography>
      <Link to={link} viewTransition className={linkWrapperStyles}>
        <Typography preset="preset4" color="grey500" className={linkStyles}>
          See details <CaretRight width={12} height={12} fill="#696868" />
        </Typography>
      </Link>
    </div>
  );
};
