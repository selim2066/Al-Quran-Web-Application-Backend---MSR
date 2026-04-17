// import dotenv from 'dotenv';
// import path from 'path';

// dotenv.config({ path: path.join(process.cwd(), '.env') });

// export default {
//   port: process.env.PORT,
//   database_url: process.env.DATABASE_URL,
// };

// src/config/index.ts
export const config = {
  port: process.env.PORT || 5000,
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
  nodeEnv: process.env.NODE_ENV || "development",
};
