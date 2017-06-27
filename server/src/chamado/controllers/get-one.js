const db = require('./../../../database')

module.exports = function (id) {
    return db.Chamado.query((qb) => {
        qb.where('id', id).andWhere('deleted_by', null)
    }).fetch()
}