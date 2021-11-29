import React from "react";
import { HeadingText, Button, PartenersFooter } from "./../components/Index";

import HeroImageMobile from "../../Assets/Hero Image (Tablet and Mobile).jpg";
import { Padding } from "./../components/Padding";
import { useNavigate } from "react-router-dom";

const list = [
  { id: 1, text: "Add your own camp suggestions." },
  { id: 2, text: "Leave reviews and experiences." },
  { id: 3, text: "See locations for all camps." },
];
export const Landing = () => {
  const navigate = useNavigate();
  const handleCTA = () => {
    navigate("campgrounds");
  };
  return (
    <div className="flex flex-col">
      <img
        className="h-64 w-screen object-cover"
        src={HeroImageMobile}
        alt="HeroImageMobile"
      />
      <Padding>
        <div className="pb-2 pt-5">
          <HeadingText>
            Explore the best
            <br />
            camps on Earth.
          </HeadingText>
        </div>
        <p className="text-left tracking-wide leading-tight ">
          YelpCamp is a curated list of the best camping
          <br />
          spots on Earth. Unfiltered and unbiased
          <br />
          reviews.
        </p>
        <ul className="py-4 space-y-3">
          {list.map((li) => (
            <li key={li.id} className="flex gap-x-3">
              <CheckIcon />
              {li.text}
            </li>
          ))}
        </ul>
        <div className="w-2/3 py-1">
          <Button text="View Campgrounds" handleClick={handleCTA} />
        </div>
        <PartenersFooter />
      </Padding>
    </div>
  );
};

const CheckIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M12 0.5C5.373 0.5 0 5.873 0 12.5C0 19.127 5.373 24.5 12 24.5C18.627 24.5 24 19.127 24 12.5C24 5.873 18.627 0.5 12 0.5ZM10.75 17.792L6.25 13.428L8.107 11.57L10.75 14.076L16.393 8.292L18.25 10.149L10.75 17.792Z"
        fill="#16A085"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
