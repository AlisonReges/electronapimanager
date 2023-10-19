const { Op } = require("sequelize");
const Pessoa = require("../models/Pessoas");

module.exports = {
  //Controller de listar todas as pessoas.
  async listarPessoas(req, res) {
    try {
      const pessoas = await Pessoa.findAll();
      return res.status(200).json(pessoas);
    } catch (error) {
      return res.status(400).json({
        erro: "Houver um erro ao listar as pessoas.",
      });
    }
  },

  //Buscar uma pessoa específica
  async listarUmaPessoa(req, res) {
    try {
      const { registration, name } = req.query;
      const pessoa = await Pessoa.findAll({
        where: {
          [Op.or]: [{ name }, { registration }],
        },
      });
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(400).json({
        erro: "Houver um erro ao listar as pessoas.",
      });
    }
  },




  
  //Controller de cadastro de uma nova pessoas.
  async novaPessoa(req, res) {
    try {
      const { registration, name } = req.body;
      const pessoa = await Pessoa.findOne({
        where:{
          registration
        }
      })
      if(pessoa){
        return res.status(409).json()
      }

      pessoa = await Pessoa.create({
        registration,
        name,
      });

      return res.status(201).json(pessoa);
    } catch (error) {
      return res.status(500).json({erro: "Houve um erro interno ao cadastrar a pessoa."});
    }
  },

  // Controller para deletar uma pessoa
  async deletarPessoa(req, res) {
    try {
      const { id } = req.params;
      const pessoa = await Pessoa.findByPk(id);

      if (!pessoa) {
        return res.status(404).json({ erro: "Pessoa não encontrada" });
      }

      await pessoa.destroy();
      return res.status(204).send(); // 204 No Content, indicando que a pessoa foi deletada com sucesso.
    } catch (error) {
      return res
        .status(500)
        .json({ erro: "Houve um erro ao deletar a pessoa" });
    }
  },

  // Controller para alterar uma pessoa
  async alterarPessoa(req, res) {
    try {
      const { id } = req.params;
      const { registration, name } = req.body;
      const pessoa = await Pessoa.findByPk(id);

      if (!pessoa) {
        return res.status(404).json({ erro: "Pessoa não encontrada" });
      }

      pessoa.registration = registration;
      pessoa.name = name;
      await pessoa.save();

      return res.status(200).json(pessoa);
    } catch (error) {
      return res
        .status(500)
        .json({ erro: "Houve um erro ao alterar a pessoa" });
    }
  },
};
