import React from "react";
import Formulario from "../components/Formulario";
import ListaDeParticipantes from "../components/ListaDeParticipantes";
import Rodape from "../components/Rodape/Rodape";

const Configuracao = () => {
  return (
    <>
      <Formulario />
      <ListaDeParticipantes />
      <Rodape />
    </>
  );
};

export default Configuracao;
