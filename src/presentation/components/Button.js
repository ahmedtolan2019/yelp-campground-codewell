import React from "react";

export const Button = ({ text, handleClick, children }) => {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className=" w-full bg-black text-white font-bold px-6 py-4 text-lg rounded focus:ring outline-none ring-offset-2 ring-black hover:bg-gray-900"
    >
      {children ? children : text}
    </button>
  );
};
