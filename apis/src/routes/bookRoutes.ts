import express from "express";
import { createBook } from "../controller/bookController";
import multer from "multer";
import path from "node:path";

const bookRoutes = express.Router();

// file upload

const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: {
    fileSize: 3e7,
  },
});

//routes

bookRoutes.route("/").post(
  upload.fields([
    {
      name: "coverImage",
      maxCount: 1,
    },
    {
      name: "file",
      maxCount: 1,
    },
  ]),
  createBook
);

export default bookRoutes;
