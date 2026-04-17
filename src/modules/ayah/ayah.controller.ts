// src/modules/ayah/ayah.controller.ts
import { Request, Response, NextFunction } from "express";
import * as ayahService from "./ayah.service";

export const getAyahsBySurah = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id as string);
    if (isNaN(id) || id < 1 || id > 114) {
      res.status(400).json({ success: false, message: "Invalid surah ID" });
      return;
    }
    const data = await ayahService.getAyahsBySurah(id);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};