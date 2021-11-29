import React from "react";

export const Testmonial = () => {
  return (
    <div className="w-full bg-red-50 py-8 px-4 grid grid-col-1 place-items-center space-y-6">
      <p className="text-black font-bold text-xl leading-relaxed tracking-wider">
        "YelpCamp has honestly saved me hours of research time, and the camps on
        here are definitely will picked and added."
      </p>
      <div className="flex w-full gap-x-3">
        <img
          src={process.env.PUBLIC_URL + "/Assets/User Testimonial.svg"}
          alt="avatar testomial"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-black text-sm">May Andrews</p>
          <p className="font-thin text-black text-sm">Professional Hiker</p>
        </div>
      </div>
    </div>
  );
};
