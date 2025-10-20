const express = require("express");
const cors = require("cors");
const todoRouter = require("./router/todoRouter");

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: ["https://todo-mern-tau.vercel.app/", "http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api/v2/todos", todoRouter);

module.exports = app;
