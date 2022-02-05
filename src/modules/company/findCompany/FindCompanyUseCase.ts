import { prisma } from "../../../database/prismaClient";

export class FindCompanyUseCase{
  async execute(){
    const companies = await prisma.companies.findMany();
    return companies;
  }
}