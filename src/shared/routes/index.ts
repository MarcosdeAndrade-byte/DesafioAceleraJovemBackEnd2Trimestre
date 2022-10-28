import { Router } from "express";
import { playersRoutes } from "./players.routes";
const router = Router();

// NO INDEX UTILIZAMOS O USE
router.use("/players", playersRoutes)

export { router };
