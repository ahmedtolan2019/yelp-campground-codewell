import React from "react";
import { useLocation } from "react-router";
import { Brand } from "./../components/Brand";

export const Footer = () => {
  const { pathname } = useLocation();
  if (
    pathname === "/" ||
    pathname === "/credentials/login" ||
    pathname === "/credentials/signup"
  )
    return null;
  return (
    <div className="py-16 px-8">
      <Brand />
    </div>
  );
};
