// src/modules/ayah/ayah.service.ts
import { prisma } from "../../lib/prisma";

export const getAyahsBySurah = (surahId: number) =>
  prisma.ayah.findMany({
    where: { surahId },
    orderBy: { ayahNumber: "asc" },
  });