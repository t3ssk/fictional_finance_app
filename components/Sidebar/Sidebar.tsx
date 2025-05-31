import { SidebarItem, SidebarItemProps } from './components/SidebarItem/SidebarItem';
import {
  logoStyle,
  logoStyleOpenVariants,
  sidebarItemsStyle,
  sidebarOpenVariants,
  sidebarStyle,
  toggleButtonOpenVariant,
  toggleButtonStyle,
} from './Sidebar.css';
import clsx from 'clsx';
import { ArrowFatLinesLeft } from 'components/Icons';
import { Link } from '@remix-run/react';
import {
  iconStyle,
  sidebarItemTextOpenVariantStyle,
} from './components/SidebarItem/SidebarItem.css';

type SidebarProps = {
  items: SidebarItemProps[];
  menuExpanded: boolean;
  setMenuExpanded: (expanded: boolean) => void;
};
export const Sidebar = ({ items, menuExpanded, setMenuExpanded }: SidebarProps) => {
  const openVariantClassName = menuExpanded ? 'open' : 'closed';
  const expandButtonTitle = menuExpanded ? 'Minimize Menu' : 'Expand Menu';
  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  return (
    <div className={clsx(sidebarStyle, sidebarOpenVariants[openVariantClassName])}>
      <Link
        to="/"
        className={clsx(logoStyle, logoStyleOpenVariants[openVariantClassName])}
        title="Finance"
      ></Link>
      <div className={sidebarItemsStyle}>
        {items.map((item) => (
          <SidebarItem key={item.title} {...item} menuExpanded={menuExpanded} />
        ))}
      </div>
      <button
        onClick={toggleMenu}
        className={clsx(toggleButtonStyle, toggleButtonOpenVariant[openVariantClassName])}
        title={expandButtonTitle}
      >
        <ArrowFatLinesLeft fill="currentColor" width={24} height={24} className={iconStyle} />
        <span className={sidebarItemTextOpenVariantStyle[openVariantClassName]}>
          {expandButtonTitle}
        </span>
      </button>
    </div>
  );
};
