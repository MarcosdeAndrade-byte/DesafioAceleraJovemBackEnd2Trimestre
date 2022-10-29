import { ITeamDTO } from "../../../dtos/ITeamDTO";
import { Team } from "../../entities/Team";
import { TeamsRepository } from "../../infra/repositories/implementations/TeamsRepository";


class ListTeamByIdUseCase {

    constructor(private teamsRepository: TeamsRepository) { }

    async execute(id: string): Promise<any> {
        const team = await this.teamsRepository.listTeamById(id);

        if(!team) {
            throw new Error("Erro ao tentar listar Time");
        }

        return team;
    }

}

export { ListTeamByIdUseCase }