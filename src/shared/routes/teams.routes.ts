import { Router } from "express";
import { createTeamController } from "../../modules/team/useCases/createTeam";


const teamsRoutes = Router();

teamsRoutes.post("/", (request, response) => { createTeamController.handle(request, response); });

export { teamsRoutes };
