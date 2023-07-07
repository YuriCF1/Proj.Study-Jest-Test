import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Cabecalho from "./components/Cabecalho";
import Card from "./components/Card";

ReactDOM.render(
  <React.StrictMode>
    <Cabecalho />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
