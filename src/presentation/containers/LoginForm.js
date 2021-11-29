import React from "react";
import { Button } from "./../components/Button";
import { Form, FormInput } from "./../components/Form";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <Form>
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
        Not a user yet?{" "}
        <Link
          to="/credentials/signup"
          className="underline text-blue-400 font-bold"
        >
          Create an account
        </Link>
      </p>
    </Form>
  );
};
