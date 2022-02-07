import React from "react";
import { Route, Routes } from "react-router-dom";
import MenuSuperior from "../components/UI/MenuSuperior";
import { NavBarPublic } from "../components/UI/NavBarPublic";
import {
  Calendario,
  Historia,
  Inicio,
  Inscripcion,
  Login,
  Reglamento,
} from "../pages/public";

export const PublicDashboard = () => {
  return (
    <>
      <MenuSuperior acceso="publico" color="secondary" />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/reglamento" element={<Reglamento />}></Route>
        <Route path="/acceso" element={<Login />}></Route>
        <Route path="/calendario" element={<Calendario />}></Route>
        <Route path="/historia" element={<Historia />}></Route>
        <Route path="/inscripcion" element={<Inscripcion />}></Route>
      </Routes>
    </>
  );
};
