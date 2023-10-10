const dbconfig = require("./dbconfig");
const Pessoas = require("../models/Pessoas");

Pessoas.init(dbconfig);
Pessoas.sync();