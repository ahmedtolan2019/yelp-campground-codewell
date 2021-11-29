import React from "react";

export const HeadingText = ({ children }) => {
  return (
    <p className="text-black text-3xl tracking-wider font-extrabold leading-9">
      {children}
    </p>
  );
};
