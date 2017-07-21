const db = require('./../../../database')

module.exports = function (id) {
    return db.Atividade.forge({ 'id': id }).destroy()
}