import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT,
  mongodb: process.env.MONGODB_URL,
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
};

export const config = Object.freeze(_config);
