import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";
import { CreatePlayerController } from "./createPlayerController";
import { CreatePlayerUseCase } from "./createPlayerUseCase";


const playersRepository = new PlayersRepository();
const createPlayerUseCase = new CreatePlayerUseCase(playersRepository);
const createPlayerController = new CreatePlayerController(createPlayerUseCase);

export { createPlayerController }
