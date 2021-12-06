import React, { useState } from "react";
import { Button } from "./../components/Button";
import { Form, FormInput } from "./../components/Form";
import { Link } from "react-router-dom";
import { useFireAuthContext } from "../../application/firebase/useAuth";
import { OperationStatus } from "./../components/OperationStatus";

export const LoginForm = () => {
  const { signIn, errors, Loadings, successes } = useFireAuthContext();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = ({ email, password }) => {
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

      <Form onSubmitFormData={(data) => handleSubmit(data)}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="user@yelpcamp.com"
          rules={{ required: "please Enter a comment" }}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          placeholder="password"
          rules={{ required: "please Enter a comment" }}
        />

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
      </Form>
    </>
  );
};
