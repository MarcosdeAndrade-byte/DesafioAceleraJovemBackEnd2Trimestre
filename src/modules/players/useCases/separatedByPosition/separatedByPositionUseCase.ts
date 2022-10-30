import { Positions } from "../../../dtos/IPositionDTO";
import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";


class SeparatedByPositionUseCase {

    constructor(private playersRepository: PlayersRepository) {}

    async execute(): Promise<Positions> {
       const separatedByPosition = await this.playersRepository.separatedByPosition();

        if(!separatedByPosition) {
            throw new Error("Não foi possível listar os usuários com base em suas posições");
        }

       return separatedByPosition;
    }

}

export { SeparatedByPositionUseCase };