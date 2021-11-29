import React from "react";
import { Footer } from "../containers/Footer";
import { Header } from "../containers/Header";

export const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen  overflow-x-hidden text-gray-700">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
