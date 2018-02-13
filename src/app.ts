import * as express from "express";
import * as dotenv from "dotenv";
import * as path from "path";
import * as errorhandler from "errorhandler";

// Load environment variables from .env file.
dotenv.config();

export const app = express();

app.set("port", process.env.PORT || 3000);

// Set pug as view engine.
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

// Set error handling for development env.
if (app.get("env") === "development") {
  app.use(errorhandler());
}