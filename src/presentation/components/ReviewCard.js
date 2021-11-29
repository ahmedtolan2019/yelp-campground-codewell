import React from "react";

export const ReviewCard = () => {
  return (
    <div className="flex flex-col gap-y-4 bor border-b border-b-gray-600 pb-8">
      <div className="flex items-center justify-between text-black">
        <h2 className=" tracking-wider font-bold">Adam Jones</h2>
        <p className="text-gray-500">13h ago</p>
      </div>
      <p className="text-gray-500 font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        voluptatibus repellat perferendis laboriosam laudantium doloremque et
        tempora quia, eligendi, earum sint similique recusandae.
      </p>
    </div>
  );
};
