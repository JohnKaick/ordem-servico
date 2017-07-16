const db = require('./../../../database')

module.exports = function (chamadoId) {
    return db.Chamado.where('id', chamadoId).fetch()
}