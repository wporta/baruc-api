/*
  Warnings:

  - Added the required column `groupId` to the `Publisher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Publisher" ADD COLUMN     "groupId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "public"."Congregation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "number" INTEGER,

    CONSTRAINT "Congregation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PreachingGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "congregationId" INTEGER NOT NULL,

    CONSTRAINT "PreachingGroup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."PreachingGroup" ADD CONSTRAINT "PreachingGroup_congregationId_fkey" FOREIGN KEY ("congregationId") REFERENCES "public"."Congregation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Publisher" ADD CONSTRAINT "Publisher_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "public"."PreachingGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
