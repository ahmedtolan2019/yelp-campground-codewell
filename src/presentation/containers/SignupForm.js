import React, { useState } from "react";
import { Button } from "./../components/Button";
import { Form, FormInput } from "./../components/Form";
import { Link } from "react-router-dom";

import { useFireAuthContext } from "../../application/firebase/useAuth";
import { OperationStatus } from "./../components/OperationStatus";
import { useForm } from "react-hook-form";

export const SignupForm = () => {
  const { signUp, errors, Loadings, successes } = useFireAuthContext();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();
  const handleFormSubmit = (data) => {
    setSubmitted(true);
    signUp(data.email, data.password);
  };

  return (
    <>
      {submitted && (
        <OperationStatus
          error={errors?.signUp}
          loading={Loadings?.signUp}
          errorMessage="Sign Up has failed!"
          successMessage="Sign Up has successed, redirecting...!"
          status="signup"
          success={successes?.signUp}
        />
      )}
      <form
        className=" grid grid-col-1 place-items-center space-y-4  w-full"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="flex w-full flex-col gap-y-3 text-gray-600">
          <label>Username</label>
          <input
            className="bg-gray-100 text-gray-700  p-3 px-6 rounded-sm focus:outline-none focus:ring-2 ring-gray-600 text-lg "
            type="text"
            placeholder="user@yelpcamp.com"
            id="user@yelpcamp.com"
            {...register("username", {
              required: "please Enter a valid username",
            })}
          />
        </div>
        <div className="flex w-full flex-col gap-y-3 text-gray-600">
          <label>Email</label>
          <input
            className="bg-gray-100 text-gray-700  p-3 px-6 rounded-sm focus:outline-none focus:ring-2 ring-gray-600 text-lg "
            type="email"
            placeholder="user@yelpcamp.com"
            id="user@yelpcamp.com"
            {...register("email", { required: "please Enter a valid email" })}
          />
        </div>
        <div className="flex w-full flex-col gap-y-3 text-gray-600">
          <label>Password</label>
          <input
            className="bg-gray-100 text-gray-700  p-3 px-6 rounded-sm focus:outline-none focus:ring-2 ring-gray-600 text-lg "
            type="password"
            placeholder="password"
            id="password"
            {...register("password", {
              required: "please Enter a valid password",
            })}
          />
        </div>

        <Button text="Create an account" />
        <p className="w-full text-gray-700">
          Already a user?
          <Link
            to="/credentials/login"
            className="underline text-blue-400 font-bold"
          >
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
};
