/*
  Warnings:

  - You are about to drop the `UserRestaurant` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[restaurantId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserRestaurant" DROP CONSTRAINT "UserRestaurant_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "UserRestaurant" DROP CONSTRAINT "UserRestaurant_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "restaurantId" INTEGER;

-- DropTable
DROP TABLE "UserRestaurant";

-- CreateIndex
CREATE UNIQUE INDEX "User_restaurantId_key" ON "User"("restaurantId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
