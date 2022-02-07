import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import userStore from "../../zustand/user.js";

export const PosicionesPolla = () => {
  const { changeUsuarioActivo } = userStore();

  const handleLogout = () => {
    changeUsuarioActivo(false);
  };

  return (
    <>
      <Button onClick={handleLogout}> LOGOUT </Button>
      <Link to="/acceso">Acceso</Link>
    </>
  );
};
