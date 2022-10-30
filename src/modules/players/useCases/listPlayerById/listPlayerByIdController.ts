import {Request, Response} from "express";
import { ListPlayerByIdUseCase } from "./listPlayerByIdUseCase";

class ListPlayerByIdController {

    constructor(private listPlayerByIdUseCase: ListPlayerByIdUseCase) {}

    async handle(request: Request,response: Response): Promise<Response> {
        try {
            const id  = request.headers.id as any;
            const player = await this.listPlayerByIdUseCase.execute(id);
            return response.status(200).json(player);
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }

}

export { ListPlayerByIdController };