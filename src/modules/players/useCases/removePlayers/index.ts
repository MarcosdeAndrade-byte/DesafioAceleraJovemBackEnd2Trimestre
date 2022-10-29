import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";
import { RemovePlayersController } from "./removePlayersController";
import { RemovePlayersUseCase } from "./removePlayersUseCase";

const playersRepository = new PlayersRepository();
const removePlayersUseCase = new RemovePlayersUseCase(playersRepository);
const removePlayersController = new RemovePlayersController(removePlayersUseCase);

export { removePlayersController };