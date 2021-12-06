import React from "react";

export const FormInput = ({
  label,
  register,
  type,
  name,
  placeholder,
  rules,
}) => {
  return (
    <div className="flex w-full flex-col gap-y-3 text-gray-600">
      <label>{label}</label>
      <input
        className="bg-gray-100 text-gray-700  p-3 px-6 rounded-sm focus:outline-none focus:ring-2 ring-gray-600 text-lg "
        type={type ? type : "text"}
        name={name}
        {...() => register(name, rules && { ...rules })}
        placeholder={placeholder}
        id={placeholder}
      />
    </div>
  );
};
