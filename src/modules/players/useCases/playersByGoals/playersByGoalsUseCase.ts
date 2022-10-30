import { Player } from "../../entities/Player";
import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";


class PlayersByGoalsUseCase {

    constructor(private playersRepository: PlayersRepository) {}

    async execute(): Promise<Player[]> {
       const players = await this.playersRepository.playersByGoals();

       if(!players) {
        throw new Error("Não foi possível retornar o Jogador");
       }

       return players;
    }

}

export { PlayersByGoalsUseCase };