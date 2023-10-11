const PessoasController = require("../sqlite/controllers/PessoasController");
const express = require("express");
const routes = express.Router();

routes.post("/pessoas", PessoasController.novaPessoa);
routes.get("/pessoas", PessoasController.listarPessoas);
routes.get("/buscarpessoa", PessoasController.listarUmaPessoa);

module.exports = routes;