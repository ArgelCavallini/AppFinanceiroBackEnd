import { prisma } from "../../../database/prismaClient";

export class FindAccountsPayableUseCase{
  async execute(id_company: string){
    const accounts_payable = await prisma.accounts_payable.findMany({
      where:{
        id_company: id_company
      }
    });
    return accounts_payable;
  }
}