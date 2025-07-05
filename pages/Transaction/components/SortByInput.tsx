import { BasicInput } from 'components/BasicInput/BasicInput';
import { CaretDown } from 'components/Icons';
import { Typography } from 'components/Typography/Typography';
import { ChangeEventHandler, SVGProps, useState } from 'react';
import {
  dropdown,
  dropdownItem,
  dropdownItemWrapper,
  individualSortRow,
  individualSortRowMobile,
  individualSortRowMobileButton,
  nowrap,
  wrapper,
} from './SortByInput.css';

type SortByInputProps = {
  label: string;
  placeholder: string;
  MobileIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  onSelectChange: ChangeEventHandler<HTMLInputElement>;
  inputWrapperClassName?: string;
  values: ValueType[];
};

type ValueType = {
  label: string;
  value: string;
};
export const SortByInput = ({
  label,
  inputWrapperClassName,
  placeholder,
  MobileIcon,
  onSelectChange,
  values = [],
}: SortByInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState({ label: '', value: '' });

  const handleChooseValue = (selectedValue: ValueType) => {
    setValue(selectedValue);
  };

  const preparedValues = values.filter((val) => val.value !== value.value);
  //TODO: handle closing and selecting via keyboard
  return (
    <div className={wrapper}>
      <div className={individualSortRow}>
        <Typography preset="preset4" color="grey500" className={nowrap}>
          {label}
        </Typography>
        <div className={inputWrapperClassName}>
          <BasicInput
            placeholder={placeholder}
            Icon={CaretDown}
            onChange={onSelectChange}
            onClick={() => setIsOpen((prev) => !prev)}
            onIconClick={() => setIsOpen((prev) => !prev)}
            value={value.label}
            readOnly
          />
        </div>
      </div>
      <div className={individualSortRowMobile}>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          title={`${label}`}
          className={individualSortRowMobileButton}
        >
          <MobileIcon fill="currentColor" width={24} height={24} />
        </button>
      </div>
      {isOpen && (
        <ul className={dropdown}>
          {value.label && (
            <li className={dropdownItemWrapper}>
              <Typography
                component="button"
                preset="preset4bold"
                color="grey900"
                onClick={() => handleChooseValue(value)}
                className={dropdownItem}
              >
                {value.label}
              </Typography>
            </li>
          )}
          {preparedValues.map((value) => (
            <li key={value.value} className={dropdownItemWrapper}>
              <Typography
                component="button"
                preset="preset4"
                color="grey900"
                onClick={() => handleChooseValue(value)}
                className={dropdownItem}
              >
                {value.label}
              </Typography>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
