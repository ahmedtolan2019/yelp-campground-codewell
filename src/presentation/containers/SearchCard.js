import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, Button } from "../components/Index";
export const SearchCard = () => {
  const serchRef = useRef("");

  useEffect(() => {
    serchRef.current.focus();
  }, []);

  return (
    <div className="px-8 py-10 bg-gray-50 rounded max-w-sm">
      <h1 className="text-4xl font-extrabold tracking-tight text-black leading-9">
        Welcome to
        <br />
        YelpCamp!
      </h1>
      <p className="font-normal text-gray-500 tracking-wider my-3">
        View our hand-picked campgrounds from all over the world, or add your
        own.
      </p>
      <Search serchRef={serchRef} />
      <Button
        text="Search"
        handleClick={() => {
          console.log(serchRef.current.value);
          serchRef.current.value = "";
        }}
      />
      <Link to="addcampground">
        {" "}
        <p className="mt-4 underline cursor-pointer text-gray-500 hover:text-black">
          Or add your own campgrounds
        </p>
      </Link>
    </div>
  );
};
