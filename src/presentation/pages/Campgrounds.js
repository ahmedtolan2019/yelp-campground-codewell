import React from "react";
import { SearchCard, CampgroundsGrid, Footer } from "../containers/Index";
import { Padding } from "../components/Padding";
export const Campgrounds = () => {
  return (
    <Padding>
      <div className="grid place-items-center gap-8">
        <SearchCard />
        <CampgroundsGrid />
      </div>
    </Padding>
  );
};
