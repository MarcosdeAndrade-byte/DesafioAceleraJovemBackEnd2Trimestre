import { IPlayerDTO } from "../../../dtos/IPlayerDTO";
import { Player } from "../../entities/Player";

interface IPlayersRepository {
    createTable(): Promise<void>;
    addPlayer({id,team_id,name,age,position,goals}: IPlayerDTO): Promise<void>;
}

export { IPlayersRepository };