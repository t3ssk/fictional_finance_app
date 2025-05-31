import { House, ArrowsDownUp, ChartDonut, JarFill, Receipt } from 'components/Icons';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { pageContentStyles, pageContentMenuExpandedStyles, pageTitleStyles } from './Layout.css';
import { Typography } from 'components/Typography/Typography';
import { useState } from 'react';
import clsx from 'clsx';

export const Layout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <div>
      <Sidebar items={sidebarItems} menuExpanded={menuExpanded} setMenuExpanded={setMenuExpanded} />
      <div
        className={clsx(
          pageContentStyles,
          pageContentMenuExpandedStyles[menuExpanded ? 'expanded' : 'collapsed']
        )}
      >
        <Typography component="h1" preset="preset1" color="grey900" className={pageTitleStyles}>
          {title}
        </Typography>
        {children}
      </div>
    </div>
  );
};

const sidebarItems = [
  {
    title: 'Overview',
    Icon: House,
    href: '/overview',
  },
  {
    title: 'Transactions',
    Icon: ArrowsDownUp,
    href: '/transactions',
  },
  {
    title: 'Budgets',
    Icon: ChartDonut,
    href: '/budgets',
  },
  {
    title: 'Pots',
    Icon: JarFill,
    href: '/pots',
  },
  {
    title: 'Recurring Bills',
    Icon: Receipt,
    href: '/recurring-bills',
  },
];
