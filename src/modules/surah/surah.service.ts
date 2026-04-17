// src/modules/surah/surah.service.ts
import { prisma } from "../../lib/prisma";

export const getAllSurahs = () =>
  prisma.surah.findMany({ orderBy: { id: "asc" } });

export const getSurahById = (id: number) =>
  prisma.surah.findUnique({ where: { id } });