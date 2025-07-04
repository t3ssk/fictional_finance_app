import { Card } from 'components/Card/Card';
import { Header } from './Header';
import { billTabStyle, billTabWrapper, recurringBillsWrapperStyles } from './RecurringBills.css';
import { Typography } from 'components/Typography/Typography';

export const RecurringBills = () => {
  return (
    <section className={recurringBillsWrapperStyles}>
      <Card padding="large">
        <Header title="Recurring Bills" link="/recurring-bills" />
        <div className={billTabWrapper}>
          <div className={billTabStyle}>
            <Typography preset="preset4" color="grey500">
              Paid Bills
            </Typography>
            <Typography preset="preset4bold" color="grey900">
              $190.00
            </Typography>
          </div>
          <div className={billTabStyle}>
            <Typography preset="preset4" color="grey500">
              Total Upcoming
            </Typography>
            <Typography preset="preset4bold" color="grey900">
              $194.98
            </Typography>
          </div>
          <div className={billTabStyle}>
            <Typography preset="preset4" color="grey500">
              Due Soon
            </Typography>
            <Typography preset="preset4bold" color="grey900">
              $59.98
            </Typography>
          </div>
        </div>
      </Card>
    </section>
  );
};
