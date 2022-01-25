-- CreateTable
CREATE TABLE "accounts_payable" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "account_value" DOUBLE PRECISION NOT NULL,
    "id_user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "payment_date" TIMESTAMP(3),

    CONSTRAINT "accounts_payable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "accounts_payable" ADD CONSTRAINT "accounts_payable_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
