import { prisma } from "../../../../database/prismaClient";

interface ICreateAccountsReceivable {
  description: string
  account_value: number
  receiving_date?: Date
  forecast_receipt_date?: Date
  id_company: string,
  id_user: string
}

export class CreateAccountsReceivableUseCase {
  async execute({ description, account_value, receiving_date, forecast_receipt_date, id_company, id_user }: ICreateAccountsReceivable) {
    const accountsReceivableExist = await prisma.accounts_receivable.findFirst({
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

    if (accountsReceivableExist) {
      throw new Error("Accounts Payable already exists")
    }

    // Salvar
    const accounts_payable = await prisma.accounts_receivable.create({
      data: {
        description,
        account_value,
        receiving_date,
        forecast_receipt_date,
        id_company,
        id_user
      },
    });

    return accounts_payable;
  }
}