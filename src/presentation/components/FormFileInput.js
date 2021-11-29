import React, { useState } from "react";

export const FormFileInput = ({ register, rules }) => {
  const [uploadedImage, setUploadedImage] = useState("");
  let imageName = [];
  return (
    <div className="flex w-full flex-col gap-y-3 text-gray-600">
      <p className="">Image</p>
      <label className="bg-gray-100  text-gray-700  p-5 px-6 rounded-sm focus:outline-none cursor-pointer  text-lg flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
        <span className="ml-3 truncate w-64 text-base leading-normal  text-gray-400">
          {uploadedImage ? (
            <span className="text-green-700">{uploadedImage}</span>
          ) : (
            "Select image"
          )}
        </span>

        <input
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          {...register("imagename", rules && { ...rules })}
          onChange={(evt) => {
            imageName = evt.target.value.split("\\");
            setUploadedImage(imageName[imageName.length - 1]);
          }}
        />
      </label>
    </div>
  );
};
