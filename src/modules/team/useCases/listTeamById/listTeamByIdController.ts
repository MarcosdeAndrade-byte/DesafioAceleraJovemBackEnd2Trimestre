import { Request, Response } from "express";
import { ListTeamByIdUseCase } from "../listTeamById/listTeamByIdUseCase"

class ListTeamByIdController {
    constructor(private ListTeamByIdUseCase: ListTeamByIdUseCase) {}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
           const { id } = request.headers as any;
           const team = await this.ListTeamByIdUseCase.execute(id);
           return response.json(team).status(200);
        } catch (error) {
            return response.json(error).status(500);
        }
    }

}

export { ListTeamByIdController }