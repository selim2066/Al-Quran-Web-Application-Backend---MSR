// prisma/seed.ts
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// ─── Types ────────────────────────────────────────────────────────────────────

interface AlQuranAyah {
  numberInSurah: number;
  text: string;
}

interface AlQuranSurah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  ayahs: AlQuranAyah[];
}

interface AlQuranResponse {
  data: AlQuranSurah;
}

// ─── Fetch helper ─────────────────────────────────────────────────────────────

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch: ${url} — ${res.status}`);
  return res.json();
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🌱 Starting seed...\n");

  for (let surahId = 1; surahId <= 114; surahId++) {
    const arabicRes = await fetchJson<AlQuranResponse>(
      `https://api.alquran.cloud/v1/surah/${surahId}`
    );

    const translationRes = await fetchJson<AlQuranResponse>(
      `https://api.alquran.cloud/v1/surah/${surahId}/en.sahih`
    );

    const surah = arabicRes.data;
    const translatedAyahs = translationRes.data.ayahs;

    await prisma.surah.upsert({
      where: { id: surahId },
      update: {},
      create: {
        id: surahId,
        nameArabic: surah.name,
        nameEnglish: surah.englishName,
        nameMeaning: surah.englishNameTranslation,
        revelation: surah.revelationType,
        ayahCount: surah.ayahs.length,
      },
    });

    for (let i = 0; i < surah.ayahs.length; i++) {
      await prisma.ayah.upsert({
        where: {
          surahId_ayahNumber: {
            surahId: surahId,
            ayahNumber: i + 1,
          },
        },
        update: {},
        create: {
          surahId: surahId,
          ayahNumber: i + 1,
          arabic: surah.ayahs[i].text,
          translation: translatedAyahs[i].text,
        },
      });
    }

    console.log(
      `✓ [${surahId}/114] ${surah.englishName} — ${surah.ayahs.length} ayahs`
    );
  }

  console.log("\n✅ Seed complete — 114 surahs, 6236 ayahs inserted.");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });