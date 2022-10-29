import { Router } from "express";
import { playersRoutes } from "./players.routes";
import { teamsRoutes } from "./teams.routes";
const router = Router();

// NO INDEX UTILIZAMOS O USE
router.use("/players", playersRoutes);
router.use("/teams", teamsRoutes);

export { router };
