import { prisma } from "../../../database/prismaClient";

export class DeleteUserUseCase {
  async execute(id: string) {
    const userExist = await prisma.users.findFirst({
      where: {
        id: id
      }
    });

    if (!userExist) {
      throw new Error("User not exists")
    }

    // Deletar
    const deleteUser = await prisma.users.delete({
      where: {
        id: id
      }
    });

    return deleteUser.id;
  }
}