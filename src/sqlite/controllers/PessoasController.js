const { op, Op } = require("sequelize");
const Pessoa = require("../models/Pessoas");

module.exports = {
    //Controller de listar todas as pessoas.
    async listarPessoas(req, res) {
        try {
            const pessoas = await Pessoa.findAll();
            return res.status(200).json(pessoas);
        } catch (error) {
            return res.status(400).json({
                erro: "Houver um erro ao listar as pessoas."
            })
        }
    },

    //Buscar uma pessoa específica
    async listarUmaPessoa(req, res) {
        try {
            const { registration, name } = req.query;
            const pessoa = await Pessoa.findAll({
                where: {
                    [Op.or]: [
                        { name }, { registration }
                    ]
                }
            })
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(400).json({
                erro: "Houver um erro ao listar as pessoas."
            })
        }
    },

    //Controller de cadastro de uma nova pessoas.
    async novaPessoa(req, res) {
        try {
            const { registration, name } = req.body;
            const pessoa = await Pessoa.create({
                registration, name
            })
            return res.status(201).json(pessoa);
        } catch (error) {
            return res.status(400).json({
                erro: "Houver um erro ao cadastrar a pessoa."
            })
        }
    }
}