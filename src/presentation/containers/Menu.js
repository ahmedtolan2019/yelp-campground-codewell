import React from "react";
import { Button } from "./../components/Button";
import { useNavigate } from "react-router-dom";

export const Menu = ({ handleClick, isAuth, userName, handleSignOut }) => {
  const navigate = useNavigate();
  return (
    <div className="w-screen px-4 pb-4 pt-4 bg-red-50 rounded">
      <div className="flex flex-col items-center space-y-3">
        <button
          onClick={() => {
            navigate("/campgrounds");
            handleClick();
          }}
          className="w-full border-2 border-black text-black font-bold px-6 py-4 text-lg rounded  outline-none hover:bg-gray-50"
        >
          Home
        </button>
        {isAuth && (
          <button
            onClick={() => {
              navigate("/campgrounds");
              handleClick();
            }}
            className="w-full border-2 border-black text-black font-bold px-6 py-4 text-lg rounded  outline-none  hover:bg-gray-50"
          >
            {"@" + userName.split("@")[0]}
          </button>
        )}
        {!isAuth && (
          <button
            onClick={() => {
              navigate("credentials/login");
              handleClick();
            }}
            className="w-full border-2 border-black text-black font-bold px-6 py-4 text-lg rounded  outline-none  hover:bg-gray-50"
          >
            Login
          </button>
        )}
        {!isAuth && (
          <Button
            text="Create an account"
            handleClick={() => {
              navigate("credentials/signup");
              handleClick();
            }}
          />
        )}
        {isAuth && (
          <Button
            handleClick={() => {
              handleSignOut();
              handleClick();
            }}
          >
            <div className="flex space-x-2 w-full justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Sign out</span>
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};
