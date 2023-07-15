import React from "react";
import Formulario from "../components/Formulario/Formulario";
import ListaDeParticipantes from "../components/ListaDeParticipantes";
import Rodape from "../components/Rodape/Rodape";
import Card from "../components/Card";

const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Formulario />
        <ListaDeParticipantes />
        <Rodape />
      </section>
    </Card>
  );
};

export default Configuracao;
