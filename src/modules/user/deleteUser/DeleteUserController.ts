import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteUserUseCase = new DeleteUserUseCase();
    const result = await deleteUserUseCase.execute(id)

    return response.json(result);
  }
}