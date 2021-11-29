import React from "react";
import { HeadingText } from "../components/HeadingText";
import { AddCampgroundForm } from "../containers/AddCampgroundForm";
import { Padding } from "./../components/Padding";

export const AddCampground = () => {
  return (
    <Padding>
      <div className="mt-4 grid grid-cols-1  space-y-6">
        <HeadingText>
          Add New
          <br />
          Campground
        </HeadingText>
        <AddCampgroundForm />
      </div>
    </Padding>
  );
};
