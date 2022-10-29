import { ITeamDTO } from "../../../dtos/ITeamDTO";
import { Team } from "../../entities/Team";
import { TeamsRepository } from "../../infra/repositories/implementations/TeamsRepository";


class ListTeamsUseCase {

    constructor(private teamsRepository: TeamsRepository){}

    async execute(): Promise<Team[]>{
        try {
           const teams = await this.teamsRepository.listTeams();
           return teams;
        } catch (error) {
            throw new Error("Erro ao tentar listar Times");
        }
    }

}

export { ListTeamsUseCase }