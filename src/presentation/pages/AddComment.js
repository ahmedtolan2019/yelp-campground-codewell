import React from "react";
import { HeadingText } from "../components/HeadingText";
import { Padding } from "./../components/Padding";
import { AddReviewForm } from "./../containers/AddReviewForm";

export const AddComment = () => {
  return (
    <Padding>
      <div className="mt-4 grid grid-cols-1 space-y-6">
        <HeadingText>Add New Comment</HeadingText>
        <AddReviewForm />
      </div>
    </Padding>
  );
};
