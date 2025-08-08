-- DropForeignKey
ALTER TABLE "public"."Publisher" DROP CONSTRAINT "Publisher_groupId_fkey";

-- AlterTable
ALTER TABLE "public"."Publisher" ALTER COLUMN "groupId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Publisher" ADD CONSTRAINT "Publisher_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "public"."PreachingGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
