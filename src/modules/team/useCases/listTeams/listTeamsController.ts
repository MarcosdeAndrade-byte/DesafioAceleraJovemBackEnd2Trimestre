import { Request, Response } from "express";
import { ListTeamsUseCase } from "./listTeamsUseCase";

class ListTeamsController {
    constructor(private listTeamsUseCase: ListTeamsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
           const teams = await this.listTeamsUseCase.execute();
           return response.json(teams).status(200);
        } catch (error) {
            return response.json(error).status(500);
        }
    }

}

export { ListTeamsController }