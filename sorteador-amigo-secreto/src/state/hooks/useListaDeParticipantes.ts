import { useRecoilValue } from "recoil"
import { listaParticipanteState } from "../atom"

export const useLitaDeParticipantes = () => {
    return useRecoilValue(listaParticipanteState)
}