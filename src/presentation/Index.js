import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import { useFireAuthContext } from "../application/firebase/useAuth";
import { useLocation } from "react-router";

export const Presentation = () => {
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

            <Route
              path="addcampground"
              element={
                <AuthRoute>
                  <AddCampground />
                </AuthRoute>
              }
            />

            <Route path=":campgroundId" element={<Campground />} />
            <Route
              path=":campgroundId/addcomment"
              element={
                <AuthRoute>
                  <AddComment />
                </AuthRoute>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/campgrounds" />} />
        </Route>
      </Routes>
    </Layout>
  );
};

const AuthRoute = ({ children }) => {
  const { isAuth } = useFireAuthContext();
  const location = useLocation();
  // Redirect them to the /login page, but save the current location they were
  // trying to go to when they were redirected. This allows us to send them
  // along to that page after they login, which is a nicer user experience
  // than dropping them off on the home page.
  if (!isAuth)
    return <Navigate to="/credentials/login" state={{ from: location }} />;

  return children;
};
