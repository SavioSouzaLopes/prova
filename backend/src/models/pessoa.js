const database = require('../config/database')

class ModelCliente {
    constructor() {
        this.model = database.db.define('clientes', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            senha: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}
class ModelFilme {
    constructor() {
        this.model = database.db.define('filmes', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.db.Sequelize.STRING
            },
            classificacaoIndicativa: {
                type: database.db.Sequelize.STRING
            },
            diretor: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}
module.exports = new ModelCliente().model
module.exports = new ModelFilme().model