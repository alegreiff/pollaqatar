import React from "react";
import { Link } from "react-router-dom";

export const NavBarPrivate = () => {
  return (
    <>
      <h4>PRIVADO: </h4>
      <Link to="/polla">Polla</Link>
      {" | "}
      <Link to="/polla/pollero">Pollero</Link>
      {" | "}
      <Link to="/polla/mundial">Mundial</Link>
      {" | "}
      <Link to="/polla/pronos">Pronósticos</Link>
      {" | "}
      <Link to="/polla/stats">Estadísticas</Link>
      {" | "}
      <Link to="/calendario">Calendario</Link>
    </>
  );
};

/*
<Route path="/stats" element={<Estadisticas />}></Route>
        <Route path="/pollero" element={<Pollero />}></Route>
        <Route path="/mundial" element={<PosicionesMundial />}></Route>
        <Route path="/polla" element={<PosicionesPolla />}></Route>
        <Route path="/pronos" element={<Pronosticos />}></Route>

*/
