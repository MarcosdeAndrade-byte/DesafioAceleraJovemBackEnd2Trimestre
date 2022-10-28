import { IPlayerDTO } from "../../../dtos/IPlayerDTO";
import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";


class CreatePlayerUseCase {

    constructor(private playersRepository: PlayersRepository){}

    async execute({id,team_id,name,age,position,goals}:IPlayerDTO): Promise<void>{
        try {
           const playerExist = await this.playersRepository.findById(id);

            if(!playerExist){
                throw new Error("O Id já existe no sistema");
            }

           await this.playersRepository.addPlayer({id,team_id,name,age,position,goals});
        } catch (error) {
            throw new Error("Erro ao tentar adicionar Jogador");
        }
    }

}

export { CreatePlayerUseCase }