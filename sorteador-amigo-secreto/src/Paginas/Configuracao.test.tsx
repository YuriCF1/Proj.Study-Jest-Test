import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Configuracao from "../Paginas/Configuracao";

const mockNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    //Para mockar qualquer outro hook que retorne uma função, tem que determinar dessa forma
    useNavigate: () => mockNavegacao, //Chamando a função, pois o useNavigate está sendo invocado como função através de uma const
  };
});

describe("Uma página de configuracao", () => {
  test("deve ser renderizada corretamente", () => {
    //Testando se a página está funcionando através do método de sanpshot
    const { container } = render(
      //Pegando o container que o componente foi renderizado

      //Nesse método snapshot, na primeira vez que o teste é rodado, ele tira uma 'foto' do html, e salva na pasta
      //Então todas as mudanças feitas (no configurcao.tsx), que alterem a estrutura do HTML, o teste não passa
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );

    //OBS: Caso eu queira atualizar o snapshot, apertar W e depois U no console de test

    expect(container).toMatchSnapshot();

    //
  });
});
