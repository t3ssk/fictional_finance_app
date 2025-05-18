import type { MetaFunction } from '@remix-run/node';
import { ArrowsDownUp, ChartDonut, House, JarFill, Receipt } from 'components/Icons';
import { BasicInput } from 'components/BasicInput/BasicInput';
export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div>
      <BasicInput label="Basic Input" helperText="Helper text" />
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
