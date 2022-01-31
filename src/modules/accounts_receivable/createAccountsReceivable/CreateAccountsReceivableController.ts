import { Request, Response } from "express";
import { CreateAccountsReceivableUseCase } from "./CreateAccountsReceivableUseCase";

export class CreateAccountsReceivableController {
  async handle(request: Request, response: Response) {
    const { description, account_value, receiving_date, forecast_receipt_date} = request.body;
    const { id_user, id_company } = request;

    const createAccountsReceivableUseCase = new CreateAccountsReceivableUseCase();
    const result = await createAccountsReceivableUseCase.execute({
      description,
      account_value,
      receiving_date,
      forecast_receipt_date,
      id_company,
      id_user
    })

    return response.json(result);
  }
}