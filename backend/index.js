
import userRoutes from "./routes/userRoutes.js";


// pakages

import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


// utils

import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 5000;

// connect to database
connectDB();

// create express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// routes
