const express = require("express");
const cors = require("cors");
const todoRouter = require("./router/todoRouter");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/v2/todos", todoRouter);

module.exports = app;
