const db = require('./../../../database')

module.exports = function (md) {
    return db.Usuario.forge(md).save()
}