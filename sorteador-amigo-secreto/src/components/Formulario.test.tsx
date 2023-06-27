import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

//Testing-library = manipular a tela. Ex: const input
//Quando se usa expect, é usado o JEST/JEST DOM

//Primeiro agumento diz qual é o teste
test("quando o input estiver vazio, novos participantes não devem ser adicionados", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );

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

test("adicionar um participante, caso haja um nome preenchido", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const botao = screen.getByRole("button");

  //Inserir um valor no input
  fireEvent.change(input, {
    //Elemento que dispara o evento, e opções passadas
    target: {
      value: "Ana Catarina",
    },
  });

  //CLicar no botão de submit
  fireEvent.click(botao);

  //Garantir que o input esteja com o foco ativo
  expect(input).toHaveFocus();

  //Garantir que o input não tenha um valor
  expect(input).toHaveValue("");
});

test("nomes duplicados não podem ser adicionados na lista", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const botao = screen.getByRole("button");

  //Testando o envio duplo
  fireEvent.change(input, {
    target: {
      value: "Ana Catarina",
    },
  });

  fireEvent.click(botao);

  fireEvent.change(input, {
    target: {
      value: "Ana Catarina",
    },
  });

  fireEvent.click(botao);

  const mensagemDeErro = screen.getByRole("alert");

  expect(mensagemDeErro.textContent).toBe(
    "Nomes duplicados não são permitidos"
  );
});
