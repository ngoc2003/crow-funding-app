require("dotenv").config();
const jsonServer = require("json-server");
const searchRouter = require("./searchRouter");
const serverRouter = require("./server");
const express = require("express");
const PORT = process.env.PORT || 3009;
const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });
app.use("/api", serverRouter);
app.use("/search", searchRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
