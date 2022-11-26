require("dotenv").config();
const express = require("express");
const fs = require("fs");
const verifyToken = require("./middleware/auth");
let rawdata = fs.readFileSync("db.json");
let database = JSON.parse(rawdata);
// const jsonServer = require("json-server");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
console.log(database);
// app.use("/api", jsonServer.defaults(), jsonServer.router("db.json"));

// app.get("/api/campaigns", verifyToken, (req, res) => {
//   res.json(database.campaigns);
// });
app.get("/api/campaigns", (req, res) => {
  res.json(database.campaigns);
});
app.get("/api/campaigns/:slug", (req, res) => {
  database.campaigns
    .findOne({ slug: req.params.slug })
    .lean()
    .then((item) => res.json(item));
});

app.listen(4001, () => console.log("Server started on port 4001"));
