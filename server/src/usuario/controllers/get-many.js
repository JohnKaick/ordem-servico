const db = require('./../../../database')

module.exports = function () {
    return db.Usuario.where().fetchAll()
}