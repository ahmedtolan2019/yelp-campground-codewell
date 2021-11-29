import React from "react";
import { ReviewCard } from "../components/ReviewCard";

export const ReviewGrid = () => {
  return (
    <div className="grid grid-cols-1 place-items-center gap-y-6 mb-10">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};
