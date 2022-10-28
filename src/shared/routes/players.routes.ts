import { response, Router } from "express";
import { createPlayerController } from "../../modules/players/useCases/createPlayer";
import { listPlayerByIdController } from "../../modules/players/useCases/listPlayerById";
import { playersByGoalsController } from "../../modules/players/useCases/playersByGoals";

const playersRoutes = Router();

playersRoutes.post("/", (request, response) => createPlayerController.handle(request, response));
playersRoutes.get("/", (request, response) => listPlayerByIdController.handle(request, response));
playersRoutes.get("/playersbygoals", (request, response) => playersByGoalsController.handle(request, response));

export { playersRoutes };
