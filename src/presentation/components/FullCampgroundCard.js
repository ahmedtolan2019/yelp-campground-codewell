import React from "react";

export const FullCampgroundCard = ({ campground }) => {
  return (
    <div className="p-8 flex flex-col border rounded-md max-w-sm ">
      <img
        className="rounded-md object-cover"
        src={process.env.PUBLIC_URL + campground.image}
        alt="campground"
      />
      <div className="flex items-center mt-6 justify-between text-black">
        <h4 className="font-bold  mb-1 tracking-wider">{campground.name}</h4>
        <p className="font-medium">${campground.price}/night</p>
      </div>
      <p className="font-light text-gray-600 pr-3 mt-4 tracking-wide  mb-1">
        {campground.description}
      </p>
      <p className="font-light italic text-gray-500 pr-3 mt-4 tracking-wide  mb-1">
        Submitted by {campground.submittedBy}
      </p>
    </div>
  );
};
