import React from "react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useNavigate } from "react-router-dom";
import { useSorteador } from "../../state/hooks/useSorteador";

import "./Rodape.css";

const Rodape = () => {
  const participantes = useListaDeParticipantes();

  const navegarPara = useNavigate();

  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara("/sorteio");
  };

  return (
    <footer>
      <button
        className="botao"
        disabled={participantes.length < 3}
        onClick={iniciar}
      >
        Iniciar brincadeira
      </button>
    </footer>
  );
};

export default Rodape;
