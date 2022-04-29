/*
  Warnings:

  - The primary key for the `Itens` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Itens` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Itens" DROP CONSTRAINT "Itens_pkey",
DROP COLUMN "id",
ADD COLUMN     "idItem" SERIAL NOT NULL,
ADD CONSTRAINT "Itens_pkey" PRIMARY KEY ("idItem");
