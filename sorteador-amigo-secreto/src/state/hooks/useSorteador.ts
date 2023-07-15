//OBS: TRANSFORMEI O HOOK EM UMA FUNÇÃO PURA(realizarSorteio), POIS AS FUNÇÕES PURAS PODEM SER TESTADAS. ENTÃO MOVI A REGRA DE NEGÓCIO PARA LÁ

import { useListaDeParticipantes } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil"
import { resultadoDoAmigoSecreto } from "../atom"
import { realizarSorteio } from "../helpers/realizarSorteio"

export const useSorteador = () => {

    const participantes = useListaDeParticipantes()

    const setResultado = useSetRecoilState(resultadoDoAmigoSecreto)

    return () => {
        const resultado = realizarSorteio(participantes)
        setResultado(resultado)
    }

    // return () => {
    //     const totalDeParticipantes = participantes.length
    //     const embaralhado = shuffle(participantes)

    //     const resultado = new Map<string, string>()

    //     for (let index = 0; index < totalDeParticipantes; index++) {
    //         //index === 0, amigoSecreto 1, último será 0
    //         const indiceDoAmigo = index === (totalDeParticipantes - 1) ? 0 : index + 1
    //         resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])
    //     }

    //     setResultado(resultado)
    // }
}