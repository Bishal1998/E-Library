import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import User from "../models/userModel";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  //get data
  const { name, email, password } = req.body;

  // validate data
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }

  try {
    // check user exists
    const user = await User.findOne({ email });
    if (user) {
      const error = createHttpError(400, "User already exists with this email");
      return next(error);
    }

    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    // save data in database
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    //token generation
    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
    });

    // response
    res.json({ message: "User Registered Successfully", accessToken: token });
  } catch (error) {
    return next(createHttpError(500, "Error creating user"));
  }
};

export { createUser };
