import "dotenv/config";
import express from "express";
import asyncHandler from "express-async-handler";
import fetch from "node-fetch";

const PORT = process.env.PORT;
if (PORT == null || PORT == ""){
  PORT = 8000;
};

const app = express();

app.use(express.static("public"));

const API = "https://randomuser.me/api/";