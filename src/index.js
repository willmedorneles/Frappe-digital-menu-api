import express from "express";
import path from "path";
import { readdirSync } from "fs";
import { limiter } from "./middlewares/rate-limit.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { errorHandling } from "./utils/error-handling.js";
import connectToDatabase from "./utils/db-connection.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(limiter);
errorHandling(app);
connectToDatabase();

// __dirname is not available in ES modules, so we need to calculate it
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the routes directory
const routesDirectory = path.join(__dirname, "./routes");

// Read all route files
readdirSync(routesDirectory).forEach((file) => {
  // Dynamically import route modules using promises
  import(path.join(routesDirectory, file)).then((routeModule) => {
    app.use(routeModule.default.path, routeModule.default.router);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
