import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import {
  AddCampground,
  AddComment,
  Campground,
  Campgrounds,
  Credentials,
  Landing,
} from "./pages/Index";
import { LoginForm, SignupForm } from "./containers/Index";
import { Layout } from "./layouts/Layout";

export const Presentation = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="credentials" element={<Credentials />}>
            <Route index element={<LoginForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
          </Route>

          <Route path="campgrounds">
            <Route index element={<Campgrounds />} />
            <Route path="addcampground" element={<AddCampground />} />
            <Route path=":campgroundId" element={<Campground />} />
            <Route path=":campgroundId/addcomment" element={<AddComment />} />
          </Route>
          <Route path="*" element={() => navigate(-1)} />
        </Route>
      </Routes>
    </Layout>
  );
};

const AuthRoute = ({ isAuth, children }) => {
  if (!isAuth) return <p>UnAuthenticated!</p>;
  return children;
};
