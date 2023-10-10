const Pessoa = require("../models/Pessoas");

module.exports = {
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