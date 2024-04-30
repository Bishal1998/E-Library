import express from "express";
import { createBook } from "../controller/bookController";

const bookRoutes = express.Router();

//routes

bookRoutes.route("/register").post(createBook);

export default bookRoutes;
