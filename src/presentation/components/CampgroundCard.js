import React from "react";
import { useNavigate } from "react-router-dom";

export const CampgroundCard = ({ campground }) => {
  const navigate = useNavigate();
  return (
    <div className="p-3 flex flex-col border rounded-md max-w-sm ">
      <img
        className="rounded-md object-cover"
        src={process.env.PUBLIC_URL + campground.image}
        alt="campground"
      />
      <h4 className="font-bold mt-2 mb-1 tracking-wider">{campground.name}</h4>
      <p className="font-extralight pr-10 tracking-wide  mb-1">
        {campground.title}
      </p>
      <button
        className="border px-3 py-3 rounded-md mt-3 font-bold tracking-wider hover:border-black focus:border-black focus:outline-none "
        onClick={() => navigate(`${campground.id}`)}
      >
        View Campground
      </button>
    </div>
  );
};
