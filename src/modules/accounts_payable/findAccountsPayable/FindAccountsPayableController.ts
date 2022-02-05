import { Request, Response } from "express";
import { FindAccountsPayableUseCase } from "./FindAccountsPayableUseCase";

export class FindAccountsPayableController {
  async handle(request: Request, response: Response) {
    const { id_company } = request;

    const findAccountsPayableUseCase = new FindAccountsPayableUseCase();
    const accounts_payable = await findAccountsPayableUseCase.execute(id_company);

    return response.json(accounts_payable);
  }
}