import React from "react";

import Booking from "../../Assets/Booking.svg";
import Airbnb from "../../Assets/Airbnb.svg";
import PlumGuide from "../../Assets/Plum Guide.svg";
export const PartenersFooter = () => {
  return (
    <div>
      Partenered with:
      <div className="flex justify-between">
        <img src={Airbnb} alt="Airbnb" />
        <img src={Booking} alt="Booking" />
        <img src={PlumGuide} alt="PlumGuide" />
      </div>
    </div>
  );
};
