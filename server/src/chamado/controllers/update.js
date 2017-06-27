const db = require('./../../../database')

module.exports = function (id, md) {
    return db.Chamado.forge(id).save(md)
}