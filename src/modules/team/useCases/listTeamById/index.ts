import { TeamsRepository } from "../../infra/repositories/implementations/TeamsRepository";
import { ListTeamByIdController } from "./listTeamByIdController";
import { ListTeamByIdUseCase } from "./listTeamByIdUseCase";

const teamRepository = new TeamsRepository();
const listTeamByIdUseCase = new ListTeamByIdUseCase(teamRepository);
const listTeamByIdController = new ListTeamByIdController(listTeamByIdUseCase);

export { listTeamByIdController };