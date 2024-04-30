import express from "express";
import { createUser } from "../controller/userController";

const userRouter = express.Router();

//routes
userRouter.route("/register").post(createUser);
export default userRouter;
