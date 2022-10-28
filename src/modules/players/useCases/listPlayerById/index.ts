import { PlayersRepository } from "../../infra/repositories/implementations/PlayersRepository";
import { ListPlayerByIdController } from "./listPlayerByIdController";
import { ListPlayerByIdUseCase } from "./listPlayerByIdUseCase";

const playersRepository = new PlayersRepository();
const listPlayerByIdUseCase = new ListPlayerByIdUseCase(playersRepository);
const listPlayerByIdController = new ListPlayerByIdController(listPlayerByIdUseCase);

export { listPlayerByIdController };
