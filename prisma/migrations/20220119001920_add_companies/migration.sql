/*
  Warnings:

  - Added the required column `id_company` to the `accounts_payable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_company` to the `accounts_receivable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts_payable" ADD COLUMN     "due_date" TIMESTAMP(3),
ADD COLUMN     "id_company" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "accounts_receivable" ADD COLUMN     "forecast_receipt_date" TIMESTAMP(3),
ADD COLUMN     "id_company" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "id_company" TEXT;

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_key" ON "companies"("name");

-- AddForeignKey
ALTER TABLE "accounts_payable" ADD CONSTRAINT "accounts_payable_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts_receivable" ADD CONSTRAINT "accounts_receivable_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
