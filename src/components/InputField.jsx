"use client";
import { useRef, useState } from "react";

function InputField({
  label,
  placeHolder,
  name,
  onChange,
  type,
  InputStyle,
  value,
  error,
  errorText,
  className,
  onBlur,
  htmlFor,
  onFocus,
}) {
  const [outline, setoutline] = useState(false);
  const inputRef = useRef();
  const closeOpenMenus = (e) => {
    if (outline && !inputRef.current?.contains(e.target)) {
      setoutline(false);
    }
  };
  if (typeof document !== "undefined") {
    document.addEventListener("mousedown", closeOpenMenus);
  }
  return (
    <div className="">
      <div
        ref={inputRef}
        onClick={() => setoutline(true)}
        className={`border ${
          error ? "border-red-500" : "border-gray"
        } ${className} rounded-[6px] py-1 gap-y-2  h-[48px] px-6  font-normal focus:outline-kandaBlue placeholder:font-normal ${
          outline ? "border-[#FF8C53]" : "border-gray"
        }  ${InputStyle && InputStyle.className}flex flex-col w-full `}
      >
        <label
          htmlFor={htmlFor}
          className="text-[#7F7571] text-[11px]  float-left "
        >
          {label}
        </label>

        <input
          type={type ? type : "text"}
          className={`w-full    text-black text-[14px] outline-none font-normal bg-transparent  placeholder:font-normal placeholder:text-black  ${
            InputStyle && InputStyle.className
          }`}
          style={InputStyle && InputStyle.style}
          placeholder={placeHolder}
          name={name}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>
      {error && (
        <p className="text-xs px-6 text-red-500 text-start">{errorText}</p>
      )}
    </div>
  );
}

export default InputField;
