import { openDb } from "../../../../../../configDB";
import { ITeamsRepository } from "../ITeamsRepository";

class TeamsRepository implements ITeamsRepository {

    constructor() { }

    async createTable(): Promise<void> {
        openDb().then(db => {
            db.exec("CREATE TABLE IF NOT EXISTS teams_repository (id TEXT,name TEXT,coach TEXT,stadium TEXT,city TEXT)");
        });
    }

}

export { TeamsRepository };