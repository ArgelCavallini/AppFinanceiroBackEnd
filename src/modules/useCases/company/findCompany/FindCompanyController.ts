import { Request, Response } from "express";
import { FindCompanyUseCase } from "./FindCompanyUseCase";

export class FindCompanyController {
  async handle(request: Request, response: Response){
    const findCompanyUseCase = new FindCompanyUseCase();

    const companies = await findCompanyUseCase.execute();

    return response.json(companies);
  }
}