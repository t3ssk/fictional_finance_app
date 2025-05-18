import { Link as ReactLink } from '@remix-run/react';
import { RemixLinkProps } from '@remix-run/react/dist/components';
import { linkStyles } from './Link.css';
import clsx from 'clsx';
import { typographyPresetStyleVariants } from 'components/Typography/Typography.css';

export const Link = (props: RemixLinkProps & React.RefAttributes<HTMLAnchorElement>) => {
  return (
    <ReactLink
      {...props}
      className={clsx(linkStyles, typographyPresetStyleVariants.preset4bold)}
    ></ReactLink>
  );
};
