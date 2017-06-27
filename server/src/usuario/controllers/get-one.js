const db = require('./../../../database')

module.exports = function (id) {
    return db.Usuario.where('id', id).fetch()
}