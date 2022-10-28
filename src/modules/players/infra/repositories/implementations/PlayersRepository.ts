import { error } from "console";
import { openDb } from "../../../../../../configDB";
import { IPlayerDTO } from "../../../../dtos/IPlayerDTO";
import { Player } from "../../../entities/Player";
import { IPlayersRepository } from "../IPlayersRepository";

class PlayersRepository implements IPlayersRepository {

    constructor() { }

    async createTable(): Promise<void> {
        openDb().then(db => {
            db.exec("CREATE TABLE IF NOT EXISTS players_repository (id TEXT PRIMARY KEY,team_id TEXT,name TEXT,age INTEGER,position TEXT,goals INTEGER)");
        });
    }

    async addPlayer({ id, team_id, name, age, position, goals }: IPlayerDTO): Promise<void> {
        await openDb().then(db => {
            db.run("INSERT INTO players_repository (id,team_id,name,age,position,goals) VALUES (?,?,?,?,?,?)", id, team_id, name, age, position, goals);
        })
    }

    async findById(id: string): Promise<Player> {
        const player = await openDb().then((db) => db.get("SELECT * FROM players_repository WHERE id = ?", id));
        return player;
    }

    async playersByGoals(): Promise<Player[]> {
        const playersByGoals = openDb().then((db) => db.all("SELECT * FROM players_repository ORDER BY goals DESC LIMIT 1"));
        return playersByGoals;
    }
};

export { PlayersRepository };
