import { Request, Response } from "express";
import { FindAccountsReceivableUseCase } from "./FindAccountsReceivableUseCase";

export class FindAccountsReceivableController {
  async handle(request: Request, response: Response){
    const { id_company } = request;

    const findAccountsReceivableUseCase = new FindAccountsReceivableUseCase();
    const accounts_receivable = await findAccountsReceivableUseCase.execute(id_company);

    return response.json(accounts_receivable);
  }
}