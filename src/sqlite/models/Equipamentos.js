const { Model, DataTypes } = require("sequelize");

class Equipamentos extends Model {
    static init(dbconfig) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            ip: {
                type: DataTypes.STRING,
                allowNull: false
            },
            public_key: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, { sequelize: dbconfig, timestamps: false, tableName: "equipamentos" })
    }

    //Associações entre tabelas, são declaradas aqui.
    // static assossiate(models){
    //     this.hasOne(models.MODELO DESTRUCTION, {
    //         foreignKey: "chaveEstrangeira", as: "apelido"
    //     })
    // }
}

module.exports = Equipamentos;