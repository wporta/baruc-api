-- CreateTable
CREATE TABLE "public"."Publisher" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthday" TIMESTAMP(3),
    "baptismDate" TIMESTAMP(3),

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("id")
);
