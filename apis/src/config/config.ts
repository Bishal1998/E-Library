import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT,
  mongodb: process.env.MONGODB_URL,
};

export const config = Object.freeze(_config);
