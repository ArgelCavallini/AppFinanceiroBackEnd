import { prisma } from "../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateUser {
  username: string;
  password: string;
}

export class CreateUserUseCase {
  async execute({password, username}:ICreateUser) {
    const userExist = await prisma.users.findFirst({
      where:{
        username: {
          equals: username,
          mode: "insensitive",
        }
      }
    });

    if (userExist) {
      throw new Error("User already exists")
    }

    // Criptografar a senha
    const hashPassword = await hash(password, 10);

    // Salvar
    const client = await prisma.users.create({
      data: {
        username,
        password: hashPassword
      }
    });

    return client;
  }
}