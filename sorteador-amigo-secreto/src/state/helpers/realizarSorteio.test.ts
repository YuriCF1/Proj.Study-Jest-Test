import realizarSorteio from "./realizarSorteio"

describe("Dado um sorteio de um amigo secreto", () => {
    test("Cada participante não sorteio o próprio nome", () => {
        const participante = ["Ana", "Catarina", "Rodolfo", "Luiz", "Natalia", "Arnaldo"]

        const sorteio = realizarSorteio(participante)

        participante.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})