// src/modules/search/search.service.ts
import { prisma } from "../../lib/prisma";

export const searchAyahs = (query: string) =>
  prisma.ayah.findMany({
    where: {
      translation: {
        contains: query,
        mode: "insensitive", // case-insensitive search
      },
    },
    include: {
      surah: {
        select: { nameEnglish: true, nameArabic: true },
      },
    },
    take: 50, // cap results — don't return thousands of rows
    orderBy: { surahId: "asc" },
  });