import { Typography } from 'components/Typography/Typography';
import {
  transactionAmountStyle,
  transactionAvatarStyle,
  transactionDateStyle,
  transactionListItemStyle,
  transactionNameStyle,
  transactionPlaceholderStyle,
} from './Transactions.css';
import clsx from 'clsx';

type TransactionListItemProps = {
  avatar?: string;
  name: string;
  amount: number;
  date: string;
};

const dateOptions = {
  year: 'numeric' as const,
  month: 'short' as const,
  day: 'numeric' as const,
};

export const TransactionListItem = ({ avatar, name, amount, date }: TransactionListItemProps) => {
  const absoluteAmount = Math.abs(amount).toFixed(2);
  return (
    <li className={transactionListItemStyle}>
      {avatar ? (
        <img src={avatar} alt="" className={transactionAvatarStyle} aria-hidden="true" />
      ) : (
        <div
          className={clsx(transactionAvatarStyle, transactionPlaceholderStyle)}
          aria-hidden="true"
        >
          <Typography preset="preset1" color="white">
            {name[0]}
          </Typography>
        </div>
      )}
      <Typography preset="preset4bold" color="grey900" className={transactionNameStyle}>
        {name}
      </Typography>
      <div className={transactionAmountStyle}>
        <Typography preset="preset4bold" color={amount > 0 ? 'green' : 'grey900'}>
          {amount > 0 ? `+$${absoluteAmount}` : `-$${absoluteAmount}`}
        </Typography>

        <Typography preset="preset4" color="grey500" className={transactionDateStyle}>
          {new Date(date).toLocaleDateString('en-GB', dateOptions)}
        </Typography>
      </div>
    </li>
  );
};
