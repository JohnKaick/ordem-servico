const db = require('./../../../database')

module.exports = function (model) {
    let md = model
    md.created_at = new Date()

    return db.Usuario.forge(md).save()
}