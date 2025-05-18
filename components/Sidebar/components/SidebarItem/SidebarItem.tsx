import { Link, useLocation } from '@remix-run/react';
import clsx from 'clsx';
import { SVGProps } from 'react';
import {
  iconStyle,
  sidebarItemOpenVariantStyle,
  sidebarItemStateVariantStyle,
  sidebarItemStyle,
  sidebarItemTextOpenVariantStyle,
} from './SidebarItem.css';

export type SidebarItemProps = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  href: string;
  menuExpanded?: boolean;
};

export const SidebarItem = ({ href, Icon, title, menuExpanded }: SidebarItemProps) => {
  const location = useLocation();
  const state = location.pathname === href ? 'active' : 'inactive';
  const openVariantClassName = menuExpanded ? 'open' : 'closed';

  return (
    <Link
      to={href}
      title={title}
      className={clsx(
        sidebarItemStyle,
        sidebarItemStateVariantStyle[state],
        sidebarItemOpenVariantStyle[openVariantClassName]
      )}
    >
      {<Icon fill="currentColor" width={24} height={24} className={iconStyle} />}{' '}
      <span className={sidebarItemTextOpenVariantStyle[openVariantClassName]}>{title}</span>
    </Link>
  );
};
