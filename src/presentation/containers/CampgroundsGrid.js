import React from "react";
import { campgroundsData } from "../../utils/staticData";
import { CampgroundCard } from "../components/Index";
export const CampgroundsGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      {campgroundsData.map((camp) => (
        <CampgroundCard key={camp.id} campground={camp} />
      ))}
    </div>
  );
};
