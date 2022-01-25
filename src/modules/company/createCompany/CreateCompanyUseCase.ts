import { prisma } from "../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateCompany {
  name: string;
}

export class CreateCompanyUseCase {
  async execute({ name }: ICreateCompany) {
    const CompanyExist = await prisma.companies.findFirst({
      where:{
        name: {
          equals: name,
          mode: "insensitive",
        }
      }
    });

    if (CompanyExist) {
      throw new Error("Company already exists")
    }

    // Salvar
    const client = await prisma.companies.create({
      data: {
        name
      }
    });

    return client;
  }
}