import React from "react";
import {
  Button,
  FullCampgroundCard,
  CampgroundCard,
} from "../components/Index";
import { ReviewGrid } from "../containers/Index";
import { Padding } from "./../components/Padding";
import { useNavigate } from "react-router-dom";
export const Campground = () => {
  const navigate = useNavigate();
  return (
    <Padding>
      <div>
        <FullCampgroundCard
          campground={{
            id: 1,
            name: "Mount Ulap",
            campgroundId: "mount-ulap",
            image: "/Assets/Camp Images/Compressed Images/Buloy Springs.jpg",
            map: "/images/Map.png",
            title:
              "One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
            description:
              "One of the most famous hikes in Benguet is Mt Ulap in Itogon. With stunning mountain views, fresh air, and a sea of clouds, Mt. Ulap is frequented by both locals and tourists. The view by the campsite is truly a wonder and if you’re lucky, you’ll see a sea of clouds which the mountain was named for. By the way, the camping fee is good for a group of seven. Photos and description from wanderera.com",
            price: "104.99",
            submittedBy: "Andrew Mike",
            createdAt: 2019,
          }}
        />

        <div className="border p-8  mt-8 rounded-md">
          <ReviewGrid />
          <Button
            handleClick={() => {
              navigate(`addcomment`);
            }}
          >
            <div className="flex items-center gap-x-2 justify-center tracking-wider">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <p>Leave a Review</p>
            </div>
          </Button>
        </div>
        <div className="border mt-8 p-8 rounded-md">
          <img
            className="rounded-md object-cover"
            src={process.env.PUBLIC_URL + "/Assets/Map.png"}
            alt="map"
          />
        </div>
      </div>
    </Padding>
  );
};
