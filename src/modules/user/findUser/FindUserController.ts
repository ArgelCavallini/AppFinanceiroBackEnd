import { Request, Response } from "express";
import { FindUserUseCase } from "./FindUserUseCase";

export class FindUserController {
  async handle(request: Request, response: Response){
    const { id_company } = request;

    const findUserUseCase = new FindUserUseCase();
    const users = await findUserUseCase.execute(id_company);

    return response.json(users);
  }
}