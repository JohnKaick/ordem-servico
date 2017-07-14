const db = require('./../../../database')

module.exports = function () {
    return db.knex('usuario')
        .innerJoin('conta', 'usuario.id', 'conta.usuario_id')
        .innerJoin('role', 'usuario.id', 'role.usuario_id')
        .select('usuario.id as id',
        'usuario.exibicao as exibicao',
        'usuario.email as email',
        'conta.bloqueado as bloqueado',
        'role.chave as chave')
        .orderBy('exibicao', 'asc')
}