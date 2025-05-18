import { ReactNode } from 'react';
import { cardStyles } from './Card.css';

export const Card = ({ children }: { children: ReactNode }) => {
  return <div className={cardStyles}>{children}</div>;
};
