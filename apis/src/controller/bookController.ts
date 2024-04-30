import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("files", req.files);
    res.json({ message: "Book created" });
  } catch (error) {
    return next(createHttpError(500, "Unable to Create Book"));
  }
};

export { createBook };
