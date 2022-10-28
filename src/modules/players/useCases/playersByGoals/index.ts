import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";
import { PlayersByGoalsController } from "./playersByGoalsController";
import { PlayersByGoalsUseCase } from "./playersByGoalsUseCase";

const playersRepository = new PlayersRepository();
const playersByGoalsUseCase = new PlayersByGoalsUseCase(playersRepository);
const playersByGoalsController = new PlayersByGoalsController(playersByGoalsUseCase);

export { playersByGoalsController };
