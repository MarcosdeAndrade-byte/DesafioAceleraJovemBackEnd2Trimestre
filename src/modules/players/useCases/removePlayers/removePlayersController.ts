import { Request, Response } from "express";
import { RemovePlayersUseCase } from "./removePlayersUseCase";

class RemovePlayersController {

    constructor(private removePlayersUseCase: RemovePlayersUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;
        await this.removePlayersUseCase.execute(id);
        return response.status(200).json("ok");
    }

}

export { RemovePlayersController };