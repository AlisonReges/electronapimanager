const PessoasController = require("../sqlite/controllers/PessoasController");
const express = require("express");
const routes = express.Router();

routes.post("/pessoas", PessoasController.novaPessoa);
routes.get("/pessoas", PessoasController.listarPessoas);
routes.get("/pessoas/:burcar", PessoasController.listarUmaPessoa);
routes.put("/pessoas/:id", PessoasController.alterarPessoa);
routes.delete("/pessoas/:id", PessoasController.deletarPessoa);

module.exports = routes;