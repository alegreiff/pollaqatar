import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Polla } from "./components/Polla";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <Polla />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
