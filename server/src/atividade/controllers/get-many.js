const db = require('./../../../database')
const Promise = require('bluebird')

module.exports = function (chamadoId) {
    return db.knex('atividade')
        .innerJoin('usuario', 'atividade.created_by', 'usuario.id')
        .where('chamado_id', chamadoId)
        .select('atividade.status as status',
        'usuario.exibicao as usuario',
        'atividade.created_at as created_at',
        'atividade.descricao as descricao')
}