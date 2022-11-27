require("dotenv").config();
const express = require("express");
const fs = require("fs");
const verifyToken = require("./middleware/auth");
let rawdata = fs.readFileSync("db.json");
let database = JSON.parse(rawdata);
const app = express();
app.use(express.json());
const cors = require("cors");
const { resolveSrv } = require("dns/promises");
app.use(cors());
// app.get("/api/campaigns", verifyToken, (req, res) => {
//   res.json(database.campaigns);
// });
app.get("/api/campaigns", (req, res) => {
  res.json(database.campaigns);
});
app.get("/api/categories", (req,res) => {
  res.json(database.categories)
})
app.get("/api/methods", (req,res) => {
  res.json(database.methods)
})
app.get("/api/campaigns/:slug", (req, res) => {
  database.campaigns
    .findOne({ slug: req.params.slug })
    .lean()
    .then((item) => res.json(item));
});

app.get('/api/search', (req,res) => {
  let q = req.query
  console.log(q)
  // let data = database.campaigns.filter( item => item.includes(q))
  // res.json(data)
})


app.listen(4001, () => console.log("Server started on port 4001"));
