const express = require("express");
const fs = require("fs");
let rawdata = fs.readFileSync("db.json");
let database = JSON.parse(rawdata);
const router = express.Router();
router.get("/", (req, res) => {
  let q = req.query.value.toLowerCase();
  let data = database.campaigns.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.author.toLowerCase().includes(q)
  );
  res.json(data);
});
router.get("/campaigns", (req, res) => {
  let q = req.query.author;
  let data = database.campaigns.filter((item) => item.authorEmail === q);
  res.json(data);
});
module.exports = router;
