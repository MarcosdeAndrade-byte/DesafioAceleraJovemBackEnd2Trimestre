import {Request, Response} from "express";
import { SeparatedByPositionUseCase } from "./separatedByPositionUseCase";

class SeparatedByPositionController {

    constructor(private separatedByPositionUseCase: SeparatedByPositionUseCase) {}

    async handle(request: Request,response: Response): Promise<Response> {
        const separatedByPositionUseCase = await this.separatedByPositionUseCase.execute();
        return response.status(200).json(separatedByPositionUseCase);
    }

}

export { SeparatedByPositionController };