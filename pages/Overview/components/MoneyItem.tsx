import clsx from 'clsx';
import { Typography } from 'components/Typography/Typography';
import { moneyItemBorderStyleVariants, moneyItemStyles } from './MoneyItem.css';
import { pb50 } from '../Overview.css';

type MoneyItemProps = {
  title: string;
  amount: number | string;
  borderColor: 0 | 1 | 2 | 3;
};
export const MoneyItem = ({ title, amount, borderColor }: MoneyItemProps) => {
  return (
    <div className={clsx(moneyItemStyles, moneyItemBorderStyleVariants[borderColor])}>
      <Typography preset="preset5" color="grey500" className={pb50}>
        {title}
      </Typography>
      <Typography preset="preset4bold" color="grey900">
        ${amount}
      </Typography>
    </div>
  );
};
