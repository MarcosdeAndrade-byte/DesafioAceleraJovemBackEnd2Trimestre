import { Request, Response } from "express";
import { SumOfGolsUseCase } from "./sumOfGolsUseCase";


class SumOfGolsController {

    constructor(private sumOfGolsUseCase: SumOfGolsUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const team_id = request.headers.team_id as any;
        const sumOfGols = await this.sumOfGolsUseCase.execute(team_id);
        return response.status(200).json(sumOfGols);
    }

}

export { SumOfGolsController };