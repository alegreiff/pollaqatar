import React from "react";
import { Link } from "react-router-dom";

export const NavBarPublic = () => {
  return (
    <>
      <Link to="/">Inicio</Link>
      {" | "}
      <Link to="/acceso">Acceso</Link>
      {" | "}
      <Link to="/calendario">Calendario</Link>
      {" | "}
      <Link to="/historia">Historia</Link>
      {" | "}
      <Link to="/inscripcion">Inscripción</Link>
      {" | "}
      <Link to="/polla">Polla</Link>
    </>
  );
};
