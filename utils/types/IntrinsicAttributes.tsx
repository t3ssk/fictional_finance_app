import { JSX } from 'react';

export type IntrinsicAttributes<
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;
