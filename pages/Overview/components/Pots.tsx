import { Card } from 'components/Card/Card';
import { potsCardStyles, potsStyles, potsWrapperStyle, potsListStyles } from './Pots.css';
import { cardTitleStyles } from '../Overview.css';
import { Typography } from 'components/Typography/Typography';
import potImage from '../../../assets/images/icon-pot.svg';
import { Header } from './Header';
import { MoneyItem } from './MoneyItem';

export const Pots = () => {
  return (
    <section className={potsStyles}>
      <Card variant="default" padding="large">
        <Header title="Pots" link="/pots" />
        <div className={potsWrapperStyle}>
          <Card variant="beige" padding="medium" className={potsCardStyles}>
            <img src={potImage} alt="Pot" />
            <div>
              <Typography preset="preset4" color="grey500" className={cardTitleStyles}>
                Total Saved
              </Typography>
              <Typography preset="preset1" color="grey900">
                $850
              </Typography>
            </div>
          </Card>
          <div className={potsListStyles}>
            {potsListItems.map((item, index) => (
              <MoneyItem
                key={item.title}
                title={item.title}
                amount={item.amount}
                borderColor={index as 0 | 1 | 2 | 3} // Cycle through 0-3 for border colors
              />
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
};

const potsListItems = [
  {
    title: 'Savings',
    amount: 159,
  },
  {
    title: 'Gift',
    amount: 40,
  },
  {
    title: 'Concert ticket',
    amount: 110,
  },
  {
    title: 'New laptop',
    amount: 10,
  },
];
