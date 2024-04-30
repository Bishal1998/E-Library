import express from "express";

const userRouter = express.Router();

//routes
userRouter.route("/register", userRegister);
export default userRouter;
