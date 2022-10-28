import { Request, Response } from "express";
import { SumOfGolsUseCase } from "./sumOfGolsUseCase";


class SumOfGolsController {

    constructor(private sumOfGolsUseCase: SumOfGolsUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const sumOfGols = await this.sumOfGolsUseCase.execute();
        return response.status(200).json(sumOfGols);
    }

}

export { SumOfGolsController };