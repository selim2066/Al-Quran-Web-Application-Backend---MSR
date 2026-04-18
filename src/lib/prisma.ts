// import "dotenv/config";
// import { PrismaPg } from '@prisma/adapter-pg'
// import { PrismaClient } from '../../generated/prisma'

import { de } from "zod/v4/locales"

// const connectionString = `<%= process.env.DATABASE_URL %>`

// const adapter = new PrismaPg({ connectionString })
// const prisma = new PrismaClient({ adapter })

// export { prisma }

// src/lib/prisma.ts


// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "@prisma/client";
// import "dotenv/config";
// import { Pool } from "pg";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// const adapter = new PrismaPg(pool);

// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({ adapter });

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// !update for vercel deployment
import { PrismaPg } from "@prisma/adapter-pg";
//import { PrismaClient } from "generated/prisma";
import { PrismaClient } from "@prisma/client"; 
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 1,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 10000,
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });