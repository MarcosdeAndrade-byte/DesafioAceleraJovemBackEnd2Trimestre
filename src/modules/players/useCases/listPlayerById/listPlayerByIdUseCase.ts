import { Request, Response } from "express";
import { IPlayerDTO } from "../../../dtos/IPlayerDTO";
import { Player } from "../../entities/Player";
import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";


class ListPlayerByIdUseCase {

    constructor(private playersRepository: PlayersRepository) {}

    async execute({id}: IPlayerDTO): Promise<Player> {
       const players = await this.playersRepository.findById(id);
       if(!players) {
        throw new Error("Usuário não encontrado");
       }

       return players;
    }

}

export { ListPlayerByIdUseCase };