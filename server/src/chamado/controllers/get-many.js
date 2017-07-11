const db = require('./../../../database')

module.exports = function () {
    return db.Chamado.query((qb) => {
        qb.orderBy('created_at', 'asc')
    }).fetchAll()
}