import { Card } from 'components/Card/Card';
import { Layout } from '../../components/Layout/Layout';
import { Typography } from 'components/Typography/Typography';
import {
  balanceRowStyles,
  cardTitleStyles,
  mainContentWrapperStyles,
} from 'pages/Overview/Overview.css';
import { Pots } from '../../pages/Overview/components/Pots';
import { Budgets } from '../../pages/Overview/components/Budgets';
import { Transactions } from '../../pages/Overview/components/Transactions';
import { RecurringBills } from '../../pages/Overview/components/RecurringBills';

export default function Overview() {
  return (
    <Layout title="Overview">
      <section className={balanceRowStyles}>
        <Card variant="dark" padding="medium">
          <Typography preset="preset4" color="white" className={cardTitleStyles}>
            Current Balance
          </Typography>
          <Typography preset="preset1" color="white">
            $4,836.00
          </Typography>
        </Card>
        <Card variant="default" padding="medium">
          <Typography preset="preset4" color="grey900" className={cardTitleStyles}>
            Income
          </Typography>
          <Typography preset="preset1" color="grey900">
            $3,814.25
          </Typography>
        </Card>
        <Card variant="default" padding="medium">
          <Typography preset="preset4" color="grey900" className={cardTitleStyles}>
            Expenses
          </Typography>
          <Typography preset="preset1" color="grey900">
            $1,700.50
          </Typography>
        </Card>
      </section>
      <div className={mainContentWrapperStyles}>
        <Pots />
        <Budgets />
        <Transactions />
        <RecurringBills />
      </div>
    </Layout>
  );
}
