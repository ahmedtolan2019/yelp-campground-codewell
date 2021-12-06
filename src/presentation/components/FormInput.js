import React from "react";

export const FormInput = (props) => {
  const { label, type, placeholder } = props;
  console.log({ ...props });
  return (
    <div className="flex w-full flex-col gap-y-3 text-gray-600">
      <label>{label}</label>
      <input
        className="bg-gray-100 text-gray-700  p-3 px-6 rounded-sm focus:outline-none focus:ring-2 ring-gray-600 text-lg "
        type={type ? type : "text"}
        placeholder={placeholder}
        id={placeholder}
        {...props}
      />
    </div>
  );
};
