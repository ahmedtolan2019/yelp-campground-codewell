import React from "react";

export const FormTextArea = ({ label, name, placeholder, register, rules }) => {
  return (
    <div className="flex w-full flex-col gap-y-3 text-gray-600">
      <label htmlFor={placeholder}>{label}</label>
      <textarea
        className="bg-gray-100 resize-none  text-gray-700  p-3 px-6 rounded-sm focus:outline-none focus:ring-2 ring-gray-600 text-base "
        name={name}
        rows="7"
        placeholder={placeholder}
        id={placeholder}
        {...register(name, rules && { ...rules })}
      />
    </div>
  );
};
