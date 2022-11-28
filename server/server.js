// require("dotenv").config();
const express = require("express");
const fs = require("fs");
// const verifyToken = require("./middleware/auth");
let rawdata = fs.readFileSync("db.json");
let database = JSON.parse(rawdata);
const router = express.Router();
// router.use(express.json());
// const cors = require("cors");
// const { resolveSrv } = require("dns/promises");
// router.use(cors());
// router.get("/api/campaigns", verifyToken, (req, res) => {
//   res.json(database.campaigns);
// });
router.get("/campaigns", (req, res) => {
  res.json(database.campaigns);
});
router.get("/categories", (req, res) => {
  res.json(database.categories);
});
router.get("/methods", (req, res) => {
  res.json(database.methods);
});
router.get("/campaigns/:slug", (req, res) => {
  let data = database.campaigns.find((item) => item.id.toString() === req.params.slug);
  res.json(data);
});

module.exports = router;

// app.listen(4001, () => console.log("Server started on port 4001"));
