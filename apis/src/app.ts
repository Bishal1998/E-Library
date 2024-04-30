import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./routes/userRoutes";

const app = express();
app.use(express.json());

// Routes

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to E-Library!" });
});

app.use("/api/users", userRouter);

//global error handler
app.use(globalErrorHandler);

export default app;
