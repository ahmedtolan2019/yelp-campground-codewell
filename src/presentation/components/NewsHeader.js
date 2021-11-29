import React from "react";
import { useLocalStorage } from "./../../helpers/useLocalStorage";

export const NewsHeader = () => {
  const [newsHeaderStatus, setNewsHeader] = useLocalStorage(
    "NewsHeaderStatus",
    true
  );
  const handleClick = () => {
    setNewsHeader(false);
  };
  if (!newsHeaderStatus) return null;
  return (
    <div className=" flex items-center justify-around w-screen  font-bold py-3 px-4 left-0 bg-black text-gray-50">
      <p className="text-center">
        this project was made by <br />
        <span className="underline cursor-pointer text-blue-400">
          Ahmed Tolan
        </span>{" "}
        and designed by{" "}
        <span className="underline cursor-pointer text-blue-400">Codewell</span>
      </p>
      <svg
        onClick={handleClick}
        className="cursor-pointer"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1L1 10"
          stroke="#969696"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M1 1L10 10"
          stroke="#969696"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};
