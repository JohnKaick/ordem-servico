const db = require('./../../../database')

module.exports = function (id, md) {
    return db.Usuario.forge(id).save(md)
}