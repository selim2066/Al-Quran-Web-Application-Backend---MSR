import { NextFunction, Request, Response } from "express";
import * as searchService from "./search.service";

export const searchAyahs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const q = (req.query.q as string)?.trim();
    if (!q || q.length < 2) {
      res.status(400).json({
        success: false,
        message: "Query must be at least 2 characters",
      });
      return;
    }

    const result = await searchService.searchAyahs(q);

    res.json({
      success: true,
      count: result.count,
      data: result.ayahs,  // ← send ONLY the array, not the whole result object
    });
  } catch (err) {
    next(err);
  }
};