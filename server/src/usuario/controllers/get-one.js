const db = require('./../../../database')

module.exports = function (UsuarioId) {
    return db.Usuario.where('id', UsuarioId).fetch()
}