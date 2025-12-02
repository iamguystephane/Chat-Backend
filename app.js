import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/connectDB.js";

dotenv.config();
const app = express();

connectDB();

app.get("/", async (req, res) => {
  res.send("Hello world. Welcome to the chat app backend.");
});

export default app;