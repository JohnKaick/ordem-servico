const db = require('./../../../database')

module.exports = function (atividadeId) {
    return db.Atividade.forge('id', atividadeId).destroy()
}