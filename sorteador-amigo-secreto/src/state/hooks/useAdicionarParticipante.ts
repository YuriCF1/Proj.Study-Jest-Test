import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipanteState } from "../atom"

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipanteState)
    const lista = useRecoilValue(listaParticipanteState)
    const setError = useSetRecoilState(erroState)
    return (nomeDoParticipante: string) => {
        if (lista.includes(nomeDoParticipante)) {
            setError("Nomes duplicados não são permitidos")
            setTimeout(() => {
                setError("")
            }, 5000)
            return
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}