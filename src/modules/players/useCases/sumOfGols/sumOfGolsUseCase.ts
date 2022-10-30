import { Player } from "../../entities/Player";
import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";


class SumOfGolsUseCase {

    constructor(private playersRepository: PlayersRepository) {}

    async execute(team_id: string): Promise<string> {
       const sumOfGols = await this.playersRepository.sumOfGols(team_id);

       if(!sumOfGols) {
        throw new Error("Não foi possível contabilizar o número de gols");
       }

       return sumOfGols;
    }

}

export { SumOfGolsUseCase };
