import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useSorteador } from "../../state/hooks/useSorteador";

jest.mock("../../state/hooks/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    //Para mockar qualquer outro hook que retorne uma função, tem que determinar dessa forma
    useNavigate: () => mockNavegacao, //Chamando a função, pois o useNavigate está sendo invocado como função através de uma const
  };
});

jest.mock("../../state/hooks/useSorteador", () => {
  return {
    useSorteador: () => mockSorteio,
  };
});

describe("Onde não existe participantes suficientes", () => {
  beforeEach(() => {
    //Antes do teste a seguir...
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });

  test("A brincadeira não pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    //const botao = screen.getByText("Iniciar brincadeira"); //Posso colocar o texto do botão
    const botao = screen.getByRole("button");
    expect(botao).toBeDisabled();
  });
});

describe("Quando existir participantes o suficiente", () => {
  beforeEach(() => {
    //Antes do teste a seguir...
    (useListaDeParticipantes as jest.Mock).mockReturnValue([
      "Ana",
      "Carla",
      "Katarina",
    ]);
  });

  test("A brincadeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const botao = screen.getByRole("button");
    expect(botao).not.toBeDisabled(); //Espera que o botão NÃO esteja habilitado
  });

  test("A brincadeira foi iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    fireEvent.click(botao);

    // expect(mockNavegacao).toHaveBeenCalled();
    expect(mockNavegacao).toHaveBeenCalledTimes(1);
    expect(mockNavegacao).toHaveBeenCalledWith("/sorteio");

    expect(mockSorteio).toHaveBeenCalledTimes(1);
  });
});
