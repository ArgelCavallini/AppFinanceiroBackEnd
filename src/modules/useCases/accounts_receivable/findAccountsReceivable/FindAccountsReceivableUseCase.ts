import { prisma } from "../../../../database/prismaClient";

export class FindAccountsReceivableUseCase{
  async execute(id_company: string){
    const accounts_receivable = await prisma.accounts_receivable.findMany({
      where:{
        id_company: id_company
      }
    });
    return accounts_receivable;
  }
}