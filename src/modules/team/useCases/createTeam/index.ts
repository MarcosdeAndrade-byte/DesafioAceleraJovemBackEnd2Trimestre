import { TeamsRepository } from "../../infra/repositories/implementations/TeamsRepository";
import { CreateTeamController } from "./createTeamController";
import { CreateTeamUseCase } from "./createTeamUseCase";


const teamRepository = new TeamsRepository();
const createTeamUseCase = new CreateTeamUseCase(teamRepository);
const createTeamController = new CreateTeamController(createTeamUseCase);

export { createTeamController };
