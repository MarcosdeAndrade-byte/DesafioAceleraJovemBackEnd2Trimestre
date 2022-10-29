import { ITeamDTO } from "../../../dtos/ITeamDTO";
import { Team } from "../../entities/Team";

interface ITeamsRepository {
    createTable(): Promise<void>;
    addTeam({id,name,coach,stadium,city}: ITeamDTO): Promise<void>;
    listTeams(): Promise<Team[]>;
    listTeamById(id: string): Promise<any>;
}

export { ITeamsRepository };
