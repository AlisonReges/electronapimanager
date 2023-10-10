const PessoasController = require("../sqlite/controllers/PessoasController");
const express = require("express");
const routes = express.Router();

routes.post("/pessoas", PessoasController.novaPessoa);

module.exports = routes;