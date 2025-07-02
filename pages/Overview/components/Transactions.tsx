import { Card } from 'components/Card/Card';
import { Header } from './Header';
import { TransactionListItem } from './TransactionListItem';
import { transactionsListStyle, transactionsWrapperStyle } from './Transactions.css';

export const Transactions = () => {
  return (
    <section className={transactionsWrapperStyle}>
      <Card padding="large">
        <Header title="Transactions" link="/transactions" />
        <ul className={transactionsListStyle}>
          {transactionsData.map((transaction) => (
            <TransactionListItem key={transaction.name} {...transaction} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

const transactionsData = [
  {
    avatar: './assets/images/avatars/emma-richardson.jpg',
    name: 'Emma Richardson',
    category: 'General',
    date: '2024-08-19T14:23:11Z',
    amount: 75.5,
    recurring: false,
  },
  {
    avatar: './assets/images/avatars/savory-bites-bistro.jpg',
    name: 'Savory Bites Bistro',
    category: 'Dining Out',
    date: '2024-08-19T20:23:11Z',
    amount: -55.5,
    recurring: false,
  },
  {
    avatar: './assets/images/avatars/daniel-carter.jpg',
    name: 'Daniel Carter',
    category: 'General',
    date: '2024-08-18T09:45:32Z',
    amount: -42.3,
    recurring: false,
  },
  {
    avatar: './assets/images/avatars/sun-park.jpg',
    name: 'Sun Park',
    category: 'General',
    date: '2024-08-17T16:12:05Z',
    amount: 120.0,
    recurring: false,
  },
  {
    //avatar: './assets/images/avatars/urban-services-hub.jpg',
    name: 'Urban Services Hub',
    category: 'General',
    date: '2024-08-17T21:08:09Z',
    amount: -65.0,
    recurring: false,
  },
];
