import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

// Routes

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to E-Library!" });
});

//global error handler
app.use(globalErrorHandler);

export default app;
