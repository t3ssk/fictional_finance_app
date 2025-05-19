import { ReactNode } from 'react';
import { cardStyles, cardColorVariants, cardPaddingVariants } from './Card.css';
import clsx from 'clsx';

type CardProps = {
  children: ReactNode;
  variant?: 'default' | 'dark' | 'beige';
  padding?: 'medium' | 'large';
  className?: string;
};
export const Card = ({
  children,
  variant = 'default',
  padding = 'large',
  className,
}: CardProps) => {
  return (
    <div
      className={clsx(
        cardStyles,
        cardColorVariants[variant],
        cardPaddingVariants[padding],
        className
      )}
    >
      {children}
    </div>
  );
};
