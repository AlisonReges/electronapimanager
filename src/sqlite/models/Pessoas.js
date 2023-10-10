const { Model, DataTypes } = require("sequelize");

class Pessoas extends Model {
    static init(dbconfig) {
        super.init({
            //Colunas da tabela.
            registration: {
                type: DataTypes.STRING,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, { sequelize: dbconfig, timestamps: false, tableName: "pessoas" })
    }
    //Associações entre tabelas, são declaradas aqui.
    // static assossiate(models){
    //     this.hasOne(models.MODELO DESTRUCTION, {
    //         foreignKey: "chaveEstrangeira", as: "apelido"
    //     })
    // }

}

module.exports = Pessoas;