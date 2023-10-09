const { Sequelize } = require("sequelize");

const dbconfig = new Sequelize({
    dialect: "sqlite",
    storage: "./src/sqlite/bd.db"
})

module.exports = dbconfig;