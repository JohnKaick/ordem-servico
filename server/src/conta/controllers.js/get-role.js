const db = require('./../../../database')

// Obtem as roles específicas do usuário
module.exports = function (usuarioId) {
    return db.Role.query((qb) => {
        qb.where('usuario_id', usuarioId)
    }).fetch()
}