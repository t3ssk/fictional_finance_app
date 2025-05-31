import { Card } from 'components/Card/Card';
import {
  budgetCard,
  budgetStyles,
  chartDescriptionStyles,
  chartItemStyles,
  chartStyles,
  chartWrapperStyles,
} from './Budgets.css';
import { Header } from './Header';
import { MoneyItem } from './MoneyItem';
import { Chart } from './Chart';
import { Typography } from 'components/Typography/Typography';

export const Budgets = () => {
  return (
    <section className={budgetStyles}>
      <Card variant="default" padding="large" className={budgetCard}>
        <Header title="Budgets" link="/budgets" />
        <div className={chartWrapperStyles}>
          <div className={chartStyles}>
            <Chart data={chartData} />
            <div className={chartDescriptionStyles}>
              <Typography preset="preset1">$338</Typography>
              <Typography preset="preset5" color="grey900">
                of $975 limit
              </Typography>
            </div>
          </div>
          <div className={chartItemStyles}>
            {chartData.map((item, index) => (
              <MoneyItem
                key={item.label}
                title={item.label}
                amount={item.value.toFixed(2)}
                borderColor={index as 0 | 1 | 2 | 3} // Cycle through 0-3 for border colors
              />
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
};

const chartData = [
  { label: 'Entertainment', value: 50 },
  { label: 'Bills', value: 750 },
  { label: 'Dining out', value: 75 },
  { label: 'Personal care', value: 150 },
];
