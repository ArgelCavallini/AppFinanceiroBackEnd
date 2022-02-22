import { prisma } from "../../../../database/prismaClient";

export class FindUserUseCase {
  async execute(id_company: string) {
    const users = await prisma.users.findMany({
      where: {
        id_company: id_company
      }
    });
    return users;
  }
}