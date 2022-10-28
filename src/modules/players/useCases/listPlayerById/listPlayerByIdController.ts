import {Request, Response} from "express";
import { ListPlayerByIdUseCase } from "./listPlayerByIdUseCase";

class ListPlayerByIdController {

    constructor(private listPlayerByIdUseCase: ListPlayerByIdUseCase) {}

    async handle(request: Request,response: Response): Promise<Response> {
        const id = request.body;
        const player = await this.listPlayerByIdUseCase.execute(id);
        return response.status(200).json(player);
    }

}

export { ListPlayerByIdController };