import React from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Formulario />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
