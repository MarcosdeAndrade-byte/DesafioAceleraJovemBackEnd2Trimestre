import { Router } from "express";
import { PlayersRepository } from "../../modules/players/infra/repositories/implementations/PlayersRepository";
import { TeamsRepository } from "../../modules/team/infra/repositories/implementations/TeamsRepository";
import { playersRoutes } from "./players.routes";
import { teamsRoutes } from "./teams.routes";

const router = Router();

const createTablePlayerRepository = new PlayersRepository();
createTablePlayerRepository.createTable();

const createTableTeamsRepository = new TeamsRepository();
createTableTeamsRepository.createTable();

// NO INDEX UTILIZAMOS O USE
router.use("/players", playersRoutes);
router.use("/teams", teamsRoutes);

export { router };
