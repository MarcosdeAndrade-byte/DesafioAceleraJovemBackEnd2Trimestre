import {Request, Response} from "express";
import { SeparatedByPositionUseCase } from "./separatedByPositionUseCase";

class SeparatedByPositionController {

    constructor(private separatedByPositionUseCase: SeparatedByPositionUseCase) {}

    async handle(request: Request,response: Response): Promise<Response> {
        try {
            const separatedByPositionUseCase = await this.separatedByPositionUseCase.execute();
            return response.status(200).json(separatedByPositionUseCase);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

}

export { SeparatedByPositionController };