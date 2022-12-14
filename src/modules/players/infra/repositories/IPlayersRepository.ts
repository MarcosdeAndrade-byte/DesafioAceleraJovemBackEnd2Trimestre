import { IPlayerDTO } from "../../../dtos/IPlayerDTO";
import { Positions } from "../../../dtos/IPositionDTO";
import { Player } from "../../entities/Player";

interface IPlayersRepository {
    createTable(): Promise<void>;
    addPlayer({id,team_id,name,age,position,goals}: IPlayerDTO): Promise<void>;
    findById(id: string): Promise<Player>;
    playersByGoals(): Promise<Player[]>;
    sumOfGols(id: string): Promise<string>;
    separatedByPosition(): Promise<Positions>;
    removePlayerById(id: string): Promise<void>;
}

export { IPlayersRepository };