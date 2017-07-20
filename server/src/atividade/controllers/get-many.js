const db = require('./../../../database')

module.exports = function (chamadoId) {
    return db.Atividade.where('chamado_id', chamadoId).orderBy('created_at', 'ASC').fetchAll()
}