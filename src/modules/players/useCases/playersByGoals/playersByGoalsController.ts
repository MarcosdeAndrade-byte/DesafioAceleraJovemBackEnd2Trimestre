import {Request, Response} from "express";
import { PlayersByGoalsUseCase } from "./playersByGoalsUseCase";

class PlayersByGoalsController {

    constructor(private playersByGoalsUseCase: PlayersByGoalsUseCase) {}

    async handle(request: Request,response: Response): Promise<Response> {
        try {
            const player = await this.playersByGoalsUseCase.execute();
            return response.status(200).json(player);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

}

export { PlayersByGoalsController };