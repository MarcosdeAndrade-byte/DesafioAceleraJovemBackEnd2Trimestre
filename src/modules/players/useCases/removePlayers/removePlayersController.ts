import { Request, Response } from "express";
import { RemovePlayersUseCase } from "./removePlayersUseCase";

class RemovePlayersController {

    constructor(private removePlayersUseCase: RemovePlayersUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.body;
            await this.removePlayersUseCase.execute(id);
            return response.status(200).json("ok");
        } catch (error) {
            return response.status(400).json(error.message)
        }
    }

}

export { RemovePlayersController };