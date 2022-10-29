import { ITeamDTO } from "../../../dtos/ITeamDTO";

interface ITeamsRepository {
    createTable(): Promise<void>;
    addTeam({id,name,coach,stadium,city}: ITeamDTO): Promise<void>;
}

export { ITeamsRepository };
