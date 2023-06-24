import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

//Testing-library = manipular a tela. Ex: const input
//Quando se usa expect, é usado o JEST/JEST DOM

//Primeiro agumento diz qual é o teste
test("quando o input estiver vazio, novos participantes não devem ser adicionados", () => {
  render(<Formulario />);

  //Encontrar no DOM o input
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  ); //Placeholder vindo do design do figma

  //Garantir o botão
  const botao = screen.getByRole("button"); //Procurando o botão pela responsabilidade de submeter

  //Garantir que o input esteja no documento
  expect(input).toBeInTheDocument();

  //Garantir que o botão esteja habilitado
  expect(botao).toBeDisabled();
});
