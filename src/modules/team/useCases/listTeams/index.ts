import { TeamsRepository } from "../../infra/repositories/implementations/TeamsRepository";
import { ListTeamsController } from "./listTeamsController";
import { ListTeamsUseCase } from "./listTeamsUseCase";


const teamRepository = new TeamsRepository();
const listTeamsUseCase = new ListTeamsUseCase(teamRepository);
const listTeamsController = new ListTeamsController(listTeamsUseCase);

export { listTeamsController };