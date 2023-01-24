import { usernameMongoDB, passwordMongoDB } from "../config.js";

import express from "express";
import mongoose from "mongoose";

export function initMongoDB() {
  const app = express();
  app.use(express.json());

  mongoose.connect(
    `mongodb+srv://${usernameMongoDB}:${passwordMongoDB}@cluster0.ifqdxpz.mongodb.net/?retryWrites=true&w=majority`
  );

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
}
