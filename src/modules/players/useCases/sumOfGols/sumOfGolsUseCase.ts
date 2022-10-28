import { Player } from "../../entities/Player";
import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";


class SumOfGolsUseCase {

    constructor(private playersRepository: PlayersRepository) {}

    async execute(): Promise<string> {
       const sumOfGols = await this.playersRepository.sumOfGols();

       if(!sumOfGols) {
        throw new Error("Não foi possível contabilizar o número de gols");
       }

       return sumOfGols;
    }

}

export { SumOfGolsUseCase };
