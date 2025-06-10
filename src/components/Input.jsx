import { useState } from "react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error = "",
  className = "",
  inputClassName = "",
  labelClassName = ""
}) => {
  const [touched, setTouched] = useState(false);

  return (
    <div className={`flex flex-col justify-center items-start gap-3 w-full transition-all ${className}`}>
      {label && (
        <label htmlFor={name} className={`${labelClassName}`}>
          {label}<span className="text-red-text ml">*</span>
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => {
          onChange(e);
          setTouched(true);
        }}
        placeholder={placeholder}
        onBlur={() => setTouched(true)}
        className={`${inputClassName} ${error ? 'border border-red-text' : 'border border-gray-five'}`}
        required={required}
      />
      {touched && error && <span className="text-red-500 text-[.7rem] font-jakarta">{error}</span>}
    </div>
  );
};

export default Input;
