import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ListaDeParticipantes from "./ListaDeParticipantes";
import { useLitaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

jest.mock("../state/hooks/useListaDeParticipantes", () => {
  return {
    useLitaDeParticipantes: jest.fn(),
  };
});

describe("Uma lista vazia de participantes", () => {
  beforeEach(() => {
    //Antes do teste a seguir...
    (useLitaDeParticipantes as jest.Mock).mockReturnValue([]);
  });

  //Lista vazia
  test("Deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaDeParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listaItem");
    expect(itens).toHaveLength(0);
  });

  //Lista preenchida
  const participantesTest = ["Ana", "Catarina"];
  beforeEach(() => {
    //Antes do teste a seguir...
    (useLitaDeParticipantes as jest.Mock).mockReturnValue(participantesTest);
  });
  test("Uma lista preenchida com participantes", () => {
    render(
      <RecoilRoot>
        <ListaDeParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem"); //A role do li já tem esse padrão, por utilizar as tags corretas
    expect(itens).toHaveLength(participantesTest.length);
  });
});
