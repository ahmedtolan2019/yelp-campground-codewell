import React from "react";
import { Button } from "./../components/Button";
import { useNavigate } from "react-router-dom";

export const Menu = ({ handleClick }) => {
  const navigate = useNavigate();
  return (
    <div className="w-screen px-4 pb-4 pt-4 bg-red-50 rounded">
      <div className="flex flex-col items-center space-y-3">
        <button
          onClick={() => {
            navigate("campgrounds");
            handleClick();
          }}
          className="w-full border-2 border-black text-black font-bold px-6 py-4 text-lg rounded  outline-none hover:bg-gray-50"
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("credentials/login");
            handleClick();
          }}
          className="w-full border-2 border-black text-black font-bold px-6 py-4 text-lg rounded  outline-none  hover:bg-gray-50"
        >
          Login
        </button>
        <Button
          text="Create an account"
          handleClick={() => {
            navigate("credentials/signup");
            handleClick();
          }}
        />
      </div>
    </div>
  );
};
