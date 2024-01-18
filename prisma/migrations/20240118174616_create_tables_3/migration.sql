/*
  Warnings:

  - The primary key for the `system` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `system` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "system" DROP CONSTRAINT "system_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "system_pkey" PRIMARY KEY ("lab_no", "sys_no");
