import { Request, Response } from "express";
import { CreatePlayerUseCase } from "./createPlayerUseCase";

class CreatePlayerController {
    constructor(private createPlayerUseCase: CreatePlayerUseCase) {}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
           const {id,team_id,name,age,position,goals} = request.body;
           await this.createPlayerUseCase.execute({id,team_id,name,age,position,goals});
           return response.json("OK").status(200);
        } catch (error) {
            return response.status(401).json(error.message);
        }
    }

}

export { CreatePlayerController }