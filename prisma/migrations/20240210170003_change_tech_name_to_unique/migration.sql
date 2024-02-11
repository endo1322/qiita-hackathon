/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Tech` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Tech_name_key" ON "Tech"("name");
