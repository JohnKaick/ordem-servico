const db = require('./../../../database')

module.exports = function () {
    return db.Chamado.where().fetchAll()
}