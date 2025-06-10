import React from "react";

const ModalInput = ({ placeholder, onChange, value, type, name }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        className="py-2 w-full bg-[#F7F7F7] px-4 rounded-lg outline-none border border-[#F0F0F0]"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default ModalInput;
