import { Card } from 'components/Card/Card';
import { Header } from './Header';
import { recurringBillsWrapperStyles } from './RecurringBills.css';

export const RecurringBills = () => {
  return (
    <section className={recurringBillsWrapperStyles}>
      <Card padding="large">
        <Header title="Recurring Bills" link="/recurring-bills" />
      </Card>
    </section>
  );
};
