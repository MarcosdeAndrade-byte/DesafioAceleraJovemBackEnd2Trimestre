import { response, Router } from "express";
import { createPlayerController } from "../../modules/players/useCases/createPlayer";
import { listPlayerByIdController } from "../../modules/players/useCases/listPlayerById";
import { playersByGoalsController } from "../../modules/players/useCases/playersByGoals";
import { separatedByPositionController } from "../../modules/players/useCases/separatedByPosition";
import { sumOfGolsController } from "../../modules/players/useCases/sumOfGols";

const playersRoutes = Router();

playersRoutes.post("/", (request, response) => createPlayerController.handle(request, response));
playersRoutes.get("/", (request, response) => listPlayerByIdController.handle(request, response));
playersRoutes.get("/playersbygoals", (request, response) => playersByGoalsController.handle(request, response));
playersRoutes.get("/sum", (request, response) => sumOfGolsController.handle(request, response));
playersRoutes.get("/positions", (request,response) => separatedByPositionController.handle(request, response));

export { playersRoutes };
