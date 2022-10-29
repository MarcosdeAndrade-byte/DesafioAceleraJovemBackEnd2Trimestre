import { Router } from "express";
import { createPlayerController } from "../../modules/players/useCases/createPlayer";
import { listPlayerByIdController } from "../../modules/players/useCases/listPlayerById";
import { playersByGoalsController } from "../../modules/players/useCases/playersByGoals";
import { removePlayersController } from "../../modules/players/useCases/removePlayers";
import { separatedByPositionController } from "../../modules/players/useCases/separatedByPosition";
import { sumOfGolsController } from "../../modules/players/useCases/sumOfGols";

const playersRoutes = Router();

playersRoutes.put("/", (request, response) => createPlayerController.handle(request, response));
playersRoutes.get("/", (request, response) => listPlayerByIdController.handle(request, response));
playersRoutes.get("/goals", (request, response) => playersByGoalsController.handle(request, response));
playersRoutes.get("/sum", (request, response) => sumOfGolsController.handle(request, response));
playersRoutes.get("/positions", (request,response) => separatedByPositionController.handle(request, response));
playersRoutes.post("/", (request, response) => removePlayersController.handle(request, response));

export { playersRoutes };
