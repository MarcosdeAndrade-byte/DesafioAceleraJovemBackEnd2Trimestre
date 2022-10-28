import { Router } from "express";
import { createPlayerController } from "../../modules/players/useCases/createPlayer";

const playersRoutes = Router();

playersRoutes.post("/", (request, response) => createPlayerController.handle(request, response));

export { playersRoutes };
