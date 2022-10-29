import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";


class RemovePlayersUseCase {

    constructor(private playersRepository: PlayersRepository) {}

    async execute(id: string): Promise<void> {
       this.playersRepository.removePlayerById(id);
    }

}

export { RemovePlayersUseCase };