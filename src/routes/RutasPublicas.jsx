import React from "react";
import { Navigate } from "react-router-dom";

export const RutasPublicas = ({ children }) => {
  //const userFS = true;
  //console.log("variable status", userFS);

  //return <>{userFS ? <Navigate to="/polla" /> : children}</>;
  return children;
};
