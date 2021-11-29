import React from "react";
import { Outlet } from "react-router";
import { Testmonial } from "./../components/Testmonial";
import { Padding } from "./../components/Padding";
import { HeadingText } from "./../components/HeadingText";

export const Credentials = () => {
  return (
    <>
      <Padding>
        <div className="mt-4">
          <HeadingText>
            Start exploring
            <br />
            camps from all
            <br />
            around the world.
          </HeadingText>

          <div className="grid grid-col-1 my-6 place-items-center">
            <Outlet />
          </div>
        </div>
      </Padding>
      <Testmonial />
    </>
  );
};
