/*
  Warnings:

  - You are about to alter the column `quantidade` on the `Itens` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Itens" ALTER COLUMN "quantidade" SET DATA TYPE INTEGER;
