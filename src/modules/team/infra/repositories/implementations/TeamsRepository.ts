import { openDb } from "../../../../../../configDB";
import { ITeamDTO } from "../../../../dtos/ITeamDTO";
import { ITeamsRepository } from "../ITeamsRepository";

class TeamsRepository implements ITeamsRepository {

    constructor() { }

    async createTable(): Promise<void> {
        openDb().then(db => {
            db.exec("CREATE TABLE IF NOT EXISTS teams_repository (id TEXT,name TEXT,coach TEXT,stadium TEXT,city TEXT)");
        });
    }

    async addTeam({id,name,coach,stadium,city}: ITeamDTO): Promise<void> {
        openDb().then(db => {
            db.run("INSERT INTO teams_repository (id,name,coach,stadium,city) VALUES (?,?,?,?,?)",id,name,coach,stadium,city);
        });
    }

}

export { TeamsRepository };