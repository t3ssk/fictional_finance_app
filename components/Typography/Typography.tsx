import { forwardRef, JSX } from 'react';
import clsx from 'clsx';
import { IntrinsicAttributes } from 'utils/types/IntrinsicAttributes';
import {
  colorStyleVariants,
  fontSizeStyleVariants,
  fontWeightStyleVariants,
  lineHeightStyleVariants,
  typographyCursorPointerStyle,
  typographyPresetStyleVariants,
  typographyStyle,
} from './Typography.css';

type TypographyOwnProps<Element extends React.ElementType = React.ElementType> = {
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  children: React.ReactNode;
  className?: string;
  color?:
    | 'beige500'
    | 'beige100'
    | 'grey900'
    | 'grey500'
    | 'grey300'
    | 'grey100'
    | 'green'
    | 'yellow'
    | 'navy'
    | 'red'
    | 'purpleSecondary'
    | 'white'
    | 'purpleOther'
    | 'turquoise'
    | 'brown'
    | 'magenta'
    | 'blue'
    | 'navyGrey'
    | 'armyGreen'
    | 'gold'
    | 'unset';
  component?: Element;
  fontSize?: 32 | 20 | 16 | 14 | 12 | 'unset';
  fontWeight?: 'bold' | 'normal';
  lineHeight?: 'unset' | 120 | 150;
  preset?:
    | 'preset1'
    | 'preset2'
    | 'preset3'
    | 'preset4'
    | 'preset4bold'
    | 'preset5'
    | 'preset5bold';
};

type TypographyProps<E extends React.ElementType> = TypographyOwnProps<E> &
  Omit<IntrinsicAttributes<E>, keyof TypographyOwnProps>;

function TypographyComponent<Element extends React.ElementType>(
  {
    component,
    children,
    fontSize = 16,
    lineHeight = 'unset',
    fontWeight = 'normal',
    color = 'unset',
    className,
    preset,
    ...rest
  }: TypographyOwnProps,
  ref: React.Ref<Element>
) {
  const Component = component || 'p';

  const selectedClassNames = preset
    ? typographyPresetStyleVariants[preset]
    : [
        fontSizeStyleVariants[fontSize],
        fontWeightStyleVariants[fontWeight],
        lineHeightStyleVariants[lineHeight],
      ];

  return (
    <Component
      {...rest}
      className={clsx(
        typographyStyle,
        selectedClassNames,
        colorStyleVariants[color],
        (component === 'a' || component === 'button') && typographyCursorPointerStyle,
        className
      )}
      ref={ref}
    >
      {children}
    </Component>
  );
}

export const Typography = forwardRef(TypographyComponent) as <E extends React.ElementType = 'p'>(
  props: TypographyProps<E>
) => JSX.Element;
