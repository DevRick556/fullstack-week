/*
  Warnings:

  - You are about to drop the column `avatarImageurl` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `coverImageurl` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `creadtedAt` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `avatarImageUrl` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverImageUrl` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "avatarImageurl",
DROP COLUMN "coverImageurl",
DROP COLUMN "creadtedAt",
ADD COLUMN     "avatarImageUrl" TEXT NOT NULL,
ADD COLUMN     "coverImageUrl" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
