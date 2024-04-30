import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import cloudinary from "../config/cloudinary";
import path from "node:path";
import Book from "../models/bookModel";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, genre, description } = req.body;
    console.log("files", req.files);

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);

    const fileName = files.coverImage[0].filename;
    const filePath = path.resolve(
      __dirname,
      "../../public/data/uploads",
      fileName
    );

    //image upload
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      filename_override: fileName,
      folder: "book-covers",
      format: coverImageMimeType,
    });

    const bookFileName = files.file[0].filename;
    const bookFilePath = path.resolve(
      __dirname,
      "../../public/data/uploads",
      bookFileName
    );

    //book pdf upload
    const bookFileUploadResult = await cloudinary.uploader.upload(
      bookFilePath,
      {
        resource_type: "raw",
        filename_override: bookFileName,
        folder: "books-files",
        format: "pdf",
      }
    );

    console.log("uploadResult", uploadResult);
    console.log("bookFileUploadResult", bookFileUploadResult);

    const newBook = new Book({
      title,
      author: "test",
      genre,
      description,
      coverImage: uploadResult.secure_url,
      file: bookFileUploadResult.secure_url,
    });

    await newBook.save();

    res.json({ message: "Book created" });
  } catch (error) {
    return next(createHttpError(500, "Unable to Create Book"));
  }
};

export { createBook };
