import React, {
  ChangeEvent, FC, memo, useMemo,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: FC<SelectProps> = memo((props) => {
  const {
    className, label, options, onChange, value, readonly,
  } = props;

  const handleChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  const optionList = useMemo(() => options?.map(({ content, value }) => (
    <option
      key={value}
      className={cls.option}
      value={value}
    >
      {content}
    </option>
  )), [options]);

  const mods: Mods = {};

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && (
        <span className={cls.label}>
          {`${label}>`}
        </span>
      )}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={handleChangeHandler}
      >
        {optionList}
      </select>
    </div>
  );
});
