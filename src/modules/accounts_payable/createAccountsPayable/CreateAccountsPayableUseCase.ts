import { prisma } from "../../../database/prismaClient";

interface ICreateAccountsPayable {
  description: string
  account_value: number
  payment_date?: Date
  due_date?: Date
  id_company: string,
  id_user: string
}

export class CreateAccountsPayableUseCase {
  async execute({ description, account_value, payment_date, due_date, id_company, id_user}: ICreateAccountsPayable) {
    const accountsPayableExist = await prisma.accounts_payable.findFirst({
      where: {
        description: {
          equals: description,
          mode: "insensitive",
        },
        account_value: {
          equals: account_value
        }
      }
    });

    if (accountsPayableExist) {
      throw new Error("Accounts Payable already exists")
    }

    // Salvar
    const accounts_payable = await prisma.accounts_payable.create({
      data: {
        description,
        account_value,
        payment_date,
        due_date,
        id_company,
        id_user
      },
    });

    return accounts_payable;
  }
}