import express from "express";
import { createUser, loginUser } from "../controller/userController";

const userRouter = express.Router();

//routes
userRouter.route("/register").post(createUser);
userRouter.route("/login").post(loginUser);
export default userRouter;
