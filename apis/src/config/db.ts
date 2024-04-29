import mongoose from "mongoose";
import { config } from "./config";

const connectToDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database Connected Successfully!");
    });
    mongoose.connection.on("error", (err) => {
      console.error("Database Connection Error: ", err);
    });
    await mongoose.connect(config.mongodb as string);
  } catch (error) {
    console.error(`Error connecting to database: ${error}`);
    process.exit(1);
  }
};

export default connectToDb;
