import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { LuUserRound } from 'react-icons/lu';

const SelectField = ({
  label,
  labelClassName,
  className,
  name,
  inputClassName,
  options = [],
  value,
  onChange,
}) => {
  return (
    <div className={`flex flex-col justify-center items-start gap-3 w-full ${className}`}>
      {label && (
        <label htmlFor={name} className={`${labelClassName}`}>
          {label}
          <span className='text-red-text text-[.875rem]'>*</span>
        </label>
      )}

        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`relative w-full px-.5 ${inputClassName}`}
        >
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
    </div>
  );
};

export default SelectField;
