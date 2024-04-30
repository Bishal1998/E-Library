import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  //get data
  const { name, email, password } = req.body;

  // validate data
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }

  res.json({ message: "User Registered Successfully" });
};

export { createUser };
