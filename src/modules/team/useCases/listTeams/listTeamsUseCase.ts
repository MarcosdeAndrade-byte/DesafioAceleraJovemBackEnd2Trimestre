import { ITeamDTO } from "../../../dtos/ITeamDTO";
import { Team } from "../../entities/Team";
import { TeamsRepository } from "../../infra/repositories/implementations/TeamsRepository";


class ListTeamsUseCase {

    constructor(private teamsRepository: TeamsRepository){}

    async execute(): Promise<Team[]>{
           const teams = await this.teamsRepository.listTeams();
           
           if(!teams) {
              throw new Error("Erro ao tentar listar Times");
           }

           return teams;
    }

}

export { ListTeamsUseCase }