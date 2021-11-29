import React, { useRef, useState } from "react";
import { Button } from "./../components/Button";
import { Form, FormInput } from "./../components/Form";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const SignupForm = () => {
  return (
    <Form>
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
      {/* <FormInput
        label="Repeat Password"
        type="password"
        name="repeatpassword"
        placeholder="Repeat Password"
        rules={{
          required: "Please confirm password",
          validate: {
            matchesPreviousPassword: (value) => {
              const currentPassword = passwordValue;
              return (
                currentPassword === value ||
                console.log("Passwords should match!")
              );
            },
          },
        }}
      /> */}

      <Button text="Create an account" />
      <p className="w-full text-gray-700">
        Already a user?{" "}
        <Link
          to="/credentials/login"
          className="underline text-blue-400 font-bold"
        >
          Sign in
        </Link>
      </p>
    </Form>
  );
};