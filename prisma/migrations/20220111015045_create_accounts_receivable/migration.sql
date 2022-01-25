-- CreateTable
CREATE TABLE "accounts_receivable" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "account_value" DOUBLE PRECISION NOT NULL,
    "id_user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "receiving_date" TIMESTAMP(3),

    CONSTRAINT "accounts_receivable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "accounts_receivable" ADD CONSTRAINT "accounts_receivable_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
