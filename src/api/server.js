const express = require("express");
const routes = require("../api/routes");
const dbconfig = require("../sqlite/configs/dbconfig.js");
dbconfig.sync().then(() => {
    console.log("banco de dados conectado")
})

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log("localhost:3000")
})

module.exports = app;