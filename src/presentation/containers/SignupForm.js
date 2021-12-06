import React, { useState } from "react";
import { Button } from "./../components/Button";
import { Form, FormInput } from "./../components/Form";
import { Link } from "react-router-dom";

import { useFireAuthContext } from "../../application/firebase/useAuth";
import { OperationStatus } from "./../components/OperationStatus";

export const SignupForm = () => {
  const { signUp, errors, Loadings, successes } = useFireAuthContext();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (data) => {
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
      <Form onSubmitFormData={(data) => handleSubmit(data)}>
        <FormInput
          label="Username"
          name="username"
          placeholder="ahmed tolan"
          rules={{ required: true }}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="user@yelpcamp.com"
          rules={{ required: true }}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          placeholder="password"
          rules={{ required: true }}
        />

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
      </Form>
    </>
  );
};
