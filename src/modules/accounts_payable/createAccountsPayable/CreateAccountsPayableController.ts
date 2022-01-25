import { Request, Response } from "express";
import { CreateAccountsPayableUseCase } from "./CreateAccountsPayableUseCase";

export class CreateAccountsPayableController {
  async handle(request: Request, response: Response) {
    const { description, account_value, payment_date, due_date, id_company} = request.body;
    const { id_user } = request;

    const createAccountsPayableUseCase = new CreateAccountsPayableUseCase();
    const result = await createAccountsPayableUseCase.execute({
      description,
      account_value, 
      payment_date, 
      due_date,
      id_company,
      id_user
    })

    return response.json(result);
  }
}