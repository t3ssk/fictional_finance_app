import { Card } from 'components/Card/Card';
import {
  potsCardStyles,
  cardTitleStyles,
  potsHeaderStyles,
  potsLinkStyles,
  potsLinkWrapperStyles,
  potsStyles,
  potsWrapperStyle,
  potsListStyles,
  potsTitleStyles,
  potsItemStyles,
  potsItemBorderStyleVariants,
} from '../Overview.css';
import { Typography } from 'components/Typography/Typography';
import { CaretRight } from 'components/Icons';
import { Link } from '@remix-run/react';
import potImage from '../../../assets/images/icon-pot.svg';
import clsx from 'clsx';

export const Pots = () => {
  return (
    <section className={potsStyles}>
      <Card variant="default" padding="large">
        <div className={potsHeaderStyles}>
          <Typography preset="preset2" color="grey900" component="h2">
            Pots
          </Typography>
          <Link to="/pots" viewTransition className={potsLinkWrapperStyles}>
            <Typography preset="preset4" color="grey500" className={potsLinkStyles}>
              See details <CaretRight width={12} height={12} fill="#696868" />
            </Typography>
          </Link>
        </div>
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
              <div
                key={index}
                className={clsx(
                  potsItemStyles,
                  potsItemBorderStyleVariants[index as 0 | 1 | 2 | 3]
                )}
              >
                <Typography preset="preset5" color="grey500" className={potsTitleStyles}>
                  {item.title}
                </Typography>
                <Typography preset="preset4bold" color="grey900">
                  {item.amount}
                </Typography>
              </div>
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
    amount: '$159',
  },
  {
    title: 'Gift',
    amount: '$40',
  },
  {
    title: 'Concert ticket',
    amount: '$110',
  },
  {
    title: 'New laptop',
    amount: '$10',
  },
];
