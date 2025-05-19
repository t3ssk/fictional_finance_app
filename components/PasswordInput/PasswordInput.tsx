import { BasicInput, BasicInputProps } from 'components/BasicInput/BasicInput';
import { Eye, EyeSlash } from 'components/Icons';
import { useState } from 'react';

type PasswordInputProps = Omit<BasicInputProps, 'type' | 'onIconClick' | 'Icon'>;
export const PasswordInput = (props: PasswordInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleIconClick = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <BasicInput
      {...props}
      type={passwordVisible ? 'text' : 'password'}
      Icon={passwordVisible ? EyeSlash : Eye}
      onIconClick={handleIconClick}
      buttonTitle={passwordVisible ? 'Hide password' : 'Show password'}
    />
  );
};
