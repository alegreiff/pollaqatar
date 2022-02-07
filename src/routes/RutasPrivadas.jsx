import React from "react";
import { Navigate } from "react-router-dom";
import userStore from "../zustand/user";

export const RutasPrivadas = ({ children }) => {
  const { usuarioActivo } = userStore();

  return <>{usuarioActivo ? children : <Navigate to="/acceso" />}</>;
};
