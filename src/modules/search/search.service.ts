// src/modules/search/search.service.ts
import { prisma } from "../../lib/prisma";

export const searchAyahs = async (query: string) => {
  const ayahs = await prisma.ayah.findMany({
    where: {
      translation: {
        contains: query,
        mode: "insensitive",
      },
    },
    include: {
      surah: {
        select: { nameEnglish: true, nameArabic: true },
      },
    },
    take: 50,
    orderBy: { surahId: "asc" },
  });

  return {
    count: ayahs.length,
    ayahs,
  };
};