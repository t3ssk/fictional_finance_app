import clsx from 'clsx';
import { InputHTMLAttributes, SVGProps, useId } from 'react';
import {
  inputStyles,
  inputStylesBorderVariants,
  inputWrapperWidthVariants,
  inputWrapperStyles,
  helperTextStyles,
  inputPaddingVariants,
  iconButtonStyles,
} from './BasicInput.css';
import { Typography } from 'components/Typography/Typography';

export type BasicInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  fullWidth?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  label: string;
  helperText?: string;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  onIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const BasicInput = ({
  error,
  fullWidth,
  id,
  className,
  label,
  ref,
  helperText,
  Icon,
  onIconClick,
  ...rest
}: BasicInputProps) => {
  const uniqueId = useId();
  const inputId = id ?? rest.name ?? uniqueId;
  const widthVariant = fullWidth ? 'fullWidth' : 'default';
  return (
    <div
      className={clsx(inputWrapperStyles, inputWrapperWidthVariants[widthVariant], className)}
      data-testid={`text-input-${inputId}`}
    >
      <Typography
        preset="preset5bold"
        component="label"
        htmlFor={inputId}
        color={error ? 'red' : 'grey500'}
      >
        {label}
      </Typography>
      <input
        aria-invalid={rest['aria-invalid'] ?? error}
        aria-describedby={error && helperText ? `${id ?? 'default'}-helper-text` : undefined}
        className={clsx(
          inputStyles,
          inputStylesBorderVariants[error ? 'error' : 'default'],
          inputPaddingVariants[Icon ? 'icon' : 'default']
        )}
        id={inputId}
        ref={ref}
        {...rest}
      />
      {Icon && (
        <button onClick={onIconClick} className={iconButtonStyles}>
          <Icon fill="currentColor" width={24} height={24} />
        </button>
      )}
      <Typography
        preset="preset5"
        color={error ? 'red' : 'grey500'}
        id={`${id ?? 'default'}-helper-text`}
        className={helperTextStyles}
      >
        {helperText}
      </Typography>
    </div>
  );
};
