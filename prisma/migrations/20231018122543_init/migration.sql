-- CreateTable
CREATE TABLE "directory" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "folderName" TEXT NOT NULL,
    "fileCount" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "shows" (
    "refId" TEXT NOT NULL,
    "showname" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "movies" (
    "refId" TEXT NOT NULL,
    "showname" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "directory_id_key" ON "directory"("id");

-- CreateIndex
CREATE UNIQUE INDEX "shows_refId_key" ON "shows"("refId");

-- CreateIndex
CREATE UNIQUE INDEX "movies_refId_key" ON "movies"("refId");
