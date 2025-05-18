import type { MetaFunction } from '@remix-run/node';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { ArrowsDownUp, ChartDonut, House, JarFill, Receipt } from 'components/Icons';
import '../../assets/reset.css';
export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  );
}
const items = [
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
