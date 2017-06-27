const db = require('./../../../database')

module.exports = function (md) {
    return db.Chamado.forge(md).save()
}