import { ITeamDTO } from "../../../dtos/ITeamDTO";
import { TeamsRepository } from "../../infra/repositories/implementations/TeamsRepository";


class CreateTeamUseCase {

    constructor(private teamsRepository: TeamsRepository){}

    async execute({id,name,coach,stadium,city}:ITeamDTO): Promise<void>{
        try {    
           await this.teamsRepository.addTeam({id,name,coach,stadium,city});
        } catch (error) {
            throw new Error("Erro ao tentar adicionar Jogador");
        }
    }

}

export { CreateTeamUseCase }