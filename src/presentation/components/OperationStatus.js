import React from "react";
import { Toast } from "./Toast";

export const OperationStatus = ({
  error,
  loading,
  errorMessage,
  successMessage,
  status,
  success,
}) => {
  if (loading)
    return (
      <div className="flex justify-center items-center">
        <div
          className="
          animate-spin
          rounded-full
          h-10
          w-10
          border-t-2 border-b-2 border-red-500
        "
        ></div>
      </div>
    );
  if (error)
    return <Toast type="error" status={status} message={errorMessage} />;
  if (success)
    return <Toast type="success" status={status} message={successMessage} />;
  return null;
};
