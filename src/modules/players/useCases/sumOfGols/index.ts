import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";
import { SumOfGolsController } from "./sumOfGolsController";
import { SumOfGolsUseCase } from "./sumOfGolsUseCase";

const playersRepository = new PlayersRepository();
const sumOfGolsUseCase = new SumOfGolsUseCase(playersRepository)
const sumOfGolsController = new SumOfGolsController(sumOfGolsUseCase);

export { sumOfGolsController };
