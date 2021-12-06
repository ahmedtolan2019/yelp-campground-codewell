import React, { useState } from "react";
import { Button } from "./../components/Button";
import { Form, FormInput } from "./../components/Form";
import { Link } from "react-router-dom";
import { useFireAuthContext } from "../../application/firebase/useAuth";
import { OperationStatus } from "./../components/OperationStatus";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { signIn, errors, Loadings, successes } = useFireAuthContext();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();
  const handleFormSubmit = ({ email, password }) => {
    setSubmitted(true);
    signIn(email, password);
  };

  return (
    <>
      {submitted && (
        <OperationStatus
          error={errors?.signIn}
          loading={Loadings?.signIn}
          errorMessage="Sign in has failed!"
          successMessage="Sign in has successed, redirecting...!"
          status="signin"
          success={successes?.signIn}
        />
      )}

      <form
        className=" grid grid-col-1 place-items-center space-y-4  w-full"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
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

        <Button text="Login" />
        <p className="w-full text-gray-700">
          Not a user yet?
          <Link
            to="/credentials/signup"
            className="underline text-blue-400 font-bold"
          >
            Create an account
          </Link>
        </p>
      </form>
    </>
  );
};
