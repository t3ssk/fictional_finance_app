import React from 'react';
import clsx from 'clsx';
import {
  buttonStyles,
  buttonStylesVisualVariants,
  buttonStylesFullWidthVariants,
} from './Button.css';
import { IntrinsicAttributes } from 'utils/types/IntrinsicAttributes';

type ButtonOwnProps<Element extends React.ElementType = React.ElementType> = {
  children?: React.ReactNode;
  component?: Element;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destroy';
};

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<IntrinsicAttributes<E>, keyof ButtonOwnProps>;

type ButtonElementType = 'button' | 'a';

type ButtonComponent = <C extends ButtonElementType = 'button'>(
  props: ButtonProps<C>
) => React.ReactElement | null;

function ButtonComponent<Element extends React.ElementType>(
  props: ButtonOwnProps,
  ref: React.Ref<Element>
) {
  const {
    children,
    component: Component = 'button',
    variant = 'primary',
    fullWidth = false,
    ...rest
  } = props;

  return (
    <Component
      {...rest}
      className={clsx(
        buttonStyles,
        buttonStylesVisualVariants[variant],
        buttonStylesFullWidthVariants[fullWidth ? 'true' : 'false']
      )}
      ref={ref}
      type="button"
    >
      {children}
    </Component>
  );
}

export const Button = React.forwardRef(ButtonComponent) as <E extends React.ElementType = 'button'>(
  props: ButtonProps<E>
) => JSX.Element;
