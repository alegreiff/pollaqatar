import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userStore from "../../zustand/user";

export const Login = () => {
  const navigate = useNavigate();
  const { changeUsuarioActivo, usuarioActivo } = userStore();

  const handleLogin = () => {
    changeUsuarioActivo(true);
    navigate("/polla");
  };

  const handleLogout = () => {
    changeUsuarioActivo(false);
  };
  return (
    <>
      {!usuarioActivo && <Button onClick={handleLogin}> LOGIN </Button>}

      {usuarioActivo && (
        <>
          <Button onClick={handleLogout}> LOGOUT </Button>
          <Link to="/polla">Acceso</Link>
        </>
      )}
    </>
  );
};
