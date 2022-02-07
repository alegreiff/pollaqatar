import React from "react";
import { RutasPublicas } from "./RutasPublicas";
import { RutasPrivadas } from "./RutasPrivadas";
import { PrivateDashboard } from "./PrivateDashboard";
import { PublicDashboard } from "./PublicDashboard";
import { Route, Routes } from "react-router-dom";
import userStore from "../zustand/user";
export const MainRouter = () => {
  const { usuarioActivo } = userStore();

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <RutasPublicas>
            <PublicDashboard />
          </RutasPublicas>
        }
      ></Route>
      <Route
        path="/polla/*"
        element={
          <RutasPrivadas>
            <PrivateDashboard />
          </RutasPrivadas>
        }
      ></Route>
    </Routes>
  );
};
