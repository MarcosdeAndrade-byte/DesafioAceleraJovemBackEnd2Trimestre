import { openDb } from "../../../../../../configDB";
import { IPlayersRepository } from "../IPlayersRepository";

class PlayersRepository implements IPlayersRepository{

    constructor() { }

    async createTable(): Promise<void> {
        openDb().then(db => {
            db.exec("CREATE TABLE IF NOT EXISTS players_repository (id TEXT PRIMARY KEY,team_id TEXT,name TEXT,age INTEGER,position TEXT,goals INTEGER)");
        });
    }
    
};

export { PlayersRepository };
