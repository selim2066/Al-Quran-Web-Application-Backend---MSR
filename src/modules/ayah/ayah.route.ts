// src/modules/ayah/ayah.route.ts
import { Router } from "express";
import * as ayahController from "./ayah.controller";

const router = Router({ mergeParams: true }); // important for :id from parent

router.get("/", ayahController.getAyahsBySurah);

export default router;