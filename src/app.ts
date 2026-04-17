


//* src/app.ts
import "dotenv/config";
import express from "express";
import cors from "cors";
import { config } from "./config";
//import { errorHandler } from "./middlewares/errorHandler";
import surahRouter from "./modules/surah/surah.route";
import ayahRouter from "./modules/ayah/ayah.route";
import searchRouter from "./modules/search/search.route";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors({ origin: config.frontendUrl }));
app.use(express.json());

// Routes
app.use("/api/surahs", surahRouter);
app.use("/api/surahs/:id/ayahs", ayahRouter);  // ← ayah nested under surah
app.use("/api/search", searchRouter);

// Health check
app.get("/", (req, res) => res.json({ status: "ok" }));

// Error handler — must be last
app.use(errorHandler);

export default app;