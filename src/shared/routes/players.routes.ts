import { Router } from "express";
import { createPlayerController } from "../../modules/players/useCases/createPlayer";
import { listPlayerByIdController } from "../../modules/players/useCases/listPlayerById";

const playersRoutes = Router();

playersRoutes.post("/", (request, response) => createPlayerController.handle(request, response));
playersRoutes.get("/", (request, response) => listPlayerByIdController.handle(request, response));

export { playersRoutes };
