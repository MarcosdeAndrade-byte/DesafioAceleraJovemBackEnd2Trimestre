import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";
import { SeparatedByPositionController } from "./separatedByPositionController";
import { SeparatedByPositionUseCase } from "./separatedByPositionUseCase";


const playersRepository = new PlayersRepository();
const separatedByPositionUseCase = new SeparatedByPositionUseCase(playersRepository);
const separatedByPositionController = new SeparatedByPositionController(separatedByPositionUseCase);

export { separatedByPositionController };
