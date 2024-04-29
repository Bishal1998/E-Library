import app from "./src/app";
import { config } from "./src/config/config";
import connectToDb from "./src/config/db";

const startServer = async () => {
  // database connection
  await connectToDb();

  //port
  const port = config.port || 3000;

  //app connection
  app.listen(port, () => {
    console.log(`Server is starting on port: ${port}`);
  });
};

startServer();
