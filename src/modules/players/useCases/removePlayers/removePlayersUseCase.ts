import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";


class RemovePlayersUseCase {

    constructor(private playersRepository: PlayersRepository) {}

    async execute(id: string): Promise<void> {
       const userAlredyExist = await this.playersRepository.findById(id);

       if(!userAlredyExist) {
        throw new Error("Usuário não encontrado");
       }

       this.playersRepository.removePlayerById(id);
    }

}

export { RemovePlayersUseCase };