import { House, ArrowsDownUp, ChartDonut, JarFill, Receipt } from 'components/Icons';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { pageContentStyles, pageWrapperStyles } from './Layout.css';
import { Typography } from 'components/Typography/Typography';

export const Layout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className={pageWrapperStyles}>
      <Sidebar items={sidebarItems} />
      <div className={pageContentStyles}>
        <Typography component="h1" preset="preset1" color="grey900">
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
