/*
  Warnings:

  - You are about to drop the column `completion` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "completion",
ADD COLUMN     "done" BOOLEAN NOT NULL DEFAULT false;
