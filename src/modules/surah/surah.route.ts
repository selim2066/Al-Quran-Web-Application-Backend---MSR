// src/modules/surah/surah.route.ts
import { Router } from "express";
import * as surahController from "./surah.controller";

const router = Router();

router.get("/", surahController.getAllSurahs);

export default router;