const db = require('./../../../database')

module.exports = function (atividadeId) {
    return db.Atividade.where('id', atividadeId).fetch()
}