import React, { useState } from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useResultadoDoSorteio } from "../state/hooks/useResultadoDoSorteio";

import "./Sorteio.css";

const Sorteio = () => {
  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");

  const participantes = useListaDeParticipantes();

  const resultadoAmigoSecreto = useResultadoDoSorteio();

  const sortear = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (resultadoAmigoSecreto.has(participanteDaVez)) {
      setAmigoSecreto(resultadoAmigoSecreto.get(participanteDaVez)!); //Validando a existência evitando undefined
    }
  };

  return (
    <section>
      <form onSubmit={sortear}>
        <select
          required
          name="participanteDaVez"
          id="participanteDaVez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={(e) => setParticipanteDaVez(e.target.value)}
        >
          {participantes.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
        <button className={"botao-sortear"}>Sorteador</button>
      </form>
      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
      <footer className="sorteio">
        <img
          src="./img/aviao.png"
          className="aviao"
          alt="Um desenho de um avião de papel"
        />
      </footer>
    </section>
  );
};

export default Sorteio;
