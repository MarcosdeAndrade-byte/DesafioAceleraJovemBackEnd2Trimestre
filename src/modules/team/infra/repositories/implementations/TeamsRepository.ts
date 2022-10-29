import { openDb } from "../../../../../../configDB";
import { ITeamDTO } from "../../../../dtos/ITeamDTO";
import { Team } from "../../../entities/Team";
import { ITeamsRepository } from "../ITeamsRepository";

class TeamsRepository implements ITeamsRepository {

    constructor() { }

    async createTable(): Promise<void> {
        openDb().then(db => {
            db.exec("CREATE TABLE IF NOT EXISTS teams_repository (id TEXT PRIMARY KEY,name TEXT,coach TEXT,stadium TEXT,city TEXT)");
        });
    }

    async addTeam({ id, name, coach, stadium, city }: ITeamDTO): Promise<void> {
        openDb().then(db => {
            db.run("INSERT INTO teams_repository (id,name,coach,stadium,city) VALUES (?,?,?,?,?)", id, name, coach, stadium, city);
        });
    }

    async listTeams(): Promise<any> {
        const teams = openDb().then(db => db.all("SELECT * FROM teams_repository"));
        return teams;
    };

    async listTeamById(id: string): Promise<any> {

        const teams = await openDb().then(db => db.get("SELECT * FROM teams_repository WHERE teams_repository.id = ?", id));

        const players = await openDb().then(db => db.all("SELECT * FROM players_repository WHERE players_repository.team_id = ?", id));

        const teamsAndPlayers = { teams, players };

        return teamsAndPlayers;
    }
}

export { TeamsRepository };