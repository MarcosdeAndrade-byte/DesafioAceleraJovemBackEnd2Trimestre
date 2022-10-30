import { Request, Response } from "express";
import { CreateTeamUseCase } from "./createTeamUseCase";

class CreateTeamController {
    constructor(private createTeamUseCase: CreateTeamUseCase) {}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
           const {id,name,coach,stadium,city} = request.body;
           await this.createTeamUseCase.execute({id,name,coach,stadium,city});
           return response.status(200).json("OK");
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }

}

export { CreateTeamController }