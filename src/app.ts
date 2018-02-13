import * as express from "express";
import * as dotenv from "dotenv";

// Load environment variables from .env file.
dotenv.config();

export const app = express();

app.set("port", process.env.PORT || 3000);