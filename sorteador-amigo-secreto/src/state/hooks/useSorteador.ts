import shuffle from "just-shuffle"
import { useListaDeParticipantes } from "./useListaDeParticipantes"

export const useSorteador = () => {

    const participantes = useListaDeParticipantes()

    return () => {
        const totalDeParticipantes = participantes.length
        const embaralhado = shuffle(participantes)

        const resultado = new Map<string, string>()

        for (let index = 0; index < totalDeParticipantes; index++) {
            //index === 0, amigoSecreto 1, último será 0
            const indiceDoAmigo = index === (totalDeParticipantes - 1) ? 0 : index + 1
            resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])
        }
    }
}