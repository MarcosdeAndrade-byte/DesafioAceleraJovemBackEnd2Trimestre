import { Router } from "express";
import { createTeamController } from "../../modules/team/useCases/createTeam";
import { listTeamByIdController } from "../../modules/team/useCases/listTeamById";
import { listTeamsController } from "../../modules/team/useCases/listTeams";


const teamsRoutes = Router();

teamsRoutes.post("/", (request, response) => { createTeamController.handle(request, response); });
teamsRoutes.get("/", (request, response) => { listTeamsController.handle(request, response); });
teamsRoutes.get("/id", (request, response) => { listTeamByIdController.handle(request, response); });

export { teamsRoutes };
