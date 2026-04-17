// src/modules/surah/surah.controller.ts
import { Request, Response, NextFunction } from "express";
import * as surahService from "./surah.service";

export const getAllSurahs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await surahService.getAllSurahs();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};