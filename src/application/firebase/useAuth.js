import React, { createContext, useContext, useEffect, useState } from "react";
import { app } from "../../infrastructure/firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const Auth = getAuth(app);
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const authContextValue = useProvider();
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

//TODO: hook to use context without importing context in each time and use context
export const useFireAuthContext = () => {
  return useContext(AuthContext);
};

//TODO: hook using in provider value
const useProvider = () => {
  //auth state
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(() => ({
    signIn: null,
    signUp: null,
    signOut: null,
  }));
  const [successes, setSuccesses] = useState(() => ({
    signIn: null,
    signUp: null,
    signOut: null,
  }));
  const [Loadings, setLoadings] = useState(() => ({
    signIn: null,
    signUp: null,
    signOut: null,
  }));

  //TODO: auth state persistance

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (authUser) => {
      if (authUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = authUser.uid;
        setUser(authUser);
        // ...
      } else {
        // User is signed out
        setUser(null);
        unsubscribe();
      }
    });
    return () => {};
  }, [user]);

  const signUp = (email, password) => {
    doOperationAndUpdateState(
      () => createUserWithEmailAndPassword(Auth, email, password),
      "signUp"
    );
  };
  //TODO: signIn
  const signIn = async (email, password) => {
    doOperationAndUpdateState(async () => {
      const { user: result } = await signInWithEmailAndPassword(
        Auth,
        email,
        password
      );
      setUser(result);
    }, "signIn");
  };
  //TODO: signOut
  const signUserOut = async () => {
    doOperationAndUpdateState(() => {
      signOut(Auth);
      setUser(null);
    }, "signOut");
  };

  //TODO: helper => suncton callback operation, setMetod , type,  setPrevValue => doOperationAndUpdateState
  const doOperationAndUpdateState = async (operation, type) => {
    setErrors({
      ...errors,
      [type]: null,
    });
    setLoadings({
      ...Loadings,
      [type]: true,
    });
    setSuccesses({
      ...successes,
      [type]: null,
    });
    try {
      await operation();
      setLoadings({
        ...Loadings,
        [type]: false,
      });
      setSuccesses({
        ...successes,
        [type]: true,
      });
      setErrors({
        ...errors,
        [type]: null,
      });
    } catch (error) {
      setUser(null);
      setSuccesses({
        ...successes,
        [type]: false,
      });
      setLoadings({
        ...Loadings,
        [type]: false,
      });
      setErrors({
        ...errors,
        [type]: {
          message: `${type} is failed: ${error.message}`,
          code: `Error Code: ${error.code}`,
        },
      });
    }
  };
  //TODO: return opject with values and functions
  return {
    signUp,
    signIn,
    signUserOut,
    isAuth: user ? true : false,
    errors,
    Loadings,
    successes,
    user,
  };
};
