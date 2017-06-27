const db = require('./../../../database')

module.exports = function (id, md) {
    return db.Chamado.forge({ 'id': id }).save(md)
}