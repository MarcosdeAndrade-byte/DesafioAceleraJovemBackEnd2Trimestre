import { Positions } from "../../../dtos/IPositionDTO";
import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";


class SeparatedByPositionUseCase {

    constructor(private playersRepository: PlayersRepository) {}

    async execute(): Promise<Positions> {
       const separatedByPosition = await this.playersRepository.separatedByPosition();
       return separatedByPosition;
    }

}

export { SeparatedByPositionUseCase };