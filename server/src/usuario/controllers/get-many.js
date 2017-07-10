const db = require('./../../../database')

module.exports = function () {
    return db.knex('usuario')
        .innerJoin('role', 'usuario.id', 'role.usuario_id')
        .select('usuario.exibicao as exibicao',
        'usuario.email as email',
        'role.chave as chave')
}