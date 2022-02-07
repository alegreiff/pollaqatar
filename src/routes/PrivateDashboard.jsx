import React from "react";
import { Route, Routes } from "react-router-dom";
import MenuSuperior from "../components/UI/MenuSuperior";
import { NavBarPrivate } from "../components/UI/NavBarPrivate";
import {
  Estadisticas,
  Pollero,
  PosicionesMundial,
  PosicionesPolla,
  Pronosticos,
} from "../pages/private";

export const PrivateDashboard = () => {
  return (
    <>
      <MenuSuperior acceso="privado" color="primary" />
      <Routes>
        <Route path="/stats" element={<Estadisticas />}></Route>
        <Route path="/pollero" element={<Pollero />}></Route>
        <Route path="/mundial" element={<PosicionesMundial />}></Route>
        <Route path="/" element={<PosicionesPolla />}></Route>
        <Route path="/pronos" element={<Pronosticos />}></Route>
      </Routes>
    </>
  );
};
