-- CreateTable
CREATE TABLE "Surah" (
    "id" INTEGER NOT NULL,
    "nameArabic" TEXT NOT NULL,
    "nameEnglish" TEXT NOT NULL,
    "nameMeaning" TEXT NOT NULL,
    "revelation" TEXT NOT NULL,
    "ayahCount" INTEGER NOT NULL,

    CONSTRAINT "Surah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ayah" (
    "id" SERIAL NOT NULL,
    "surahId" INTEGER NOT NULL,
    "ayahNumber" INTEGER NOT NULL,
    "arabic" TEXT NOT NULL,
    "translation" TEXT NOT NULL,

    CONSTRAINT "Ayah_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Ayah_surahId_idx" ON "Ayah"("surahId");

-- CreateIndex
CREATE UNIQUE INDEX "Ayah_surahId_ayahNumber_key" ON "Ayah"("surahId", "ayahNumber");

-- AddForeignKey
ALTER TABLE "Ayah" ADD CONSTRAINT "Ayah_surahId_fkey" FOREIGN KEY ("surahId") REFERENCES "Surah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
