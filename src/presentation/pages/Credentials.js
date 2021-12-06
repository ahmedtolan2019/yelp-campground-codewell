import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Testmonial } from "./../components/Testmonial";
import { Padding } from "./../components/Padding";
import { HeadingText } from "./../components/HeadingText";
import { useFireAuthContext } from "../../application/firebase/useAuth";

export const Credentials = () => {
  const { isAuth } = useFireAuthContext();
  if (isAuth) return <Navigate to="/campgrounds" replace={true} />;

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
