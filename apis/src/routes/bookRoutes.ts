import express from "express";
import { createBook } from "../controller/bookController";

const bookRoutes = express.Router();

//routes

bookRoutes.route("/").post(createBook);

export default bookRoutes;
