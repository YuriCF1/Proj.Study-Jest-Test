import { atom } from "recoil";

export const listaParticipanteState = atom<string[]>({
    key: 'listaParticipanteState',
    default: []
})

