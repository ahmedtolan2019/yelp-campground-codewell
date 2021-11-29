import React, { useRef } from "react";

export const Search = ({ serchRef }) => {
  console.log("render");
  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-3">
      <span className=" z-10 h-full leading-normal font-norma text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-4">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <input
        ref={serchRef}
        type="text"
        placeholder="Search"
        className="px-3 py-4 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-base border border-gray-400 outline-none focus:outline-none focus:border-black w-full pl-10 ring-black"
      />
    </div>
  );
};
