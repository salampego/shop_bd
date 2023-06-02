const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const productsRouter = require("./routes/api/products");
const orderRouter = require("./routes/api/order");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/order", orderRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
