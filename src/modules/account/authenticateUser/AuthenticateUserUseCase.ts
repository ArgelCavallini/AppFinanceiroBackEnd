import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateUser {
  username: String;
  password: String;
}

export class AuthenticateUserUseCase {
  // Recever username, password
  async execute({ username, password }: IAuthenticateUser) {

    // Verificar se username cadastrado
    const user = await prisma.users.findFirst({
      where: {
        username
      }
    });
    if (!user) {
      throw new Error("Username or password invalid!")
    }

    // Verificar se senha corresponde ao username
    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) {
      throw new Error("Username or password invalid!")
    }

    // Gerar o token
    const token = sign({ username }, process.env.TOKEN, {
      subject: user.id,
      expiresIn: "1d",
    })

    return token;
  }
}