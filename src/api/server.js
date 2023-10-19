const express = require("express");
const routes = require("../api/routes");
const dbconfig = require("../sqlite/configs/dbconfig.js");
const dbInit = require("../sqlite/configs/dbInit.js");

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("localhost:3000");
});

module.exports = app;
