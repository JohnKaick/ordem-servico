const db = require('./../../../database')
const Promise = require('bluebird')

const definirData = function (status, prazo) {
    let _prazo = null
    let _termino = null

    if (status === 'aberto') {
        _prazo = new Date()
    } else if (status === 'fechado') {
        _prazo = new Date()
        _termino = new Date()
    } else {
        _prazo = new Date(prazo)
    }

    return Promise.resolve([_prazo, _termino])
}

module.exports = function (model, chamadoId, usuarioId) {
    let atividade = new db.Atividade()
    atividade.set('chamado_id', chamadoId)
    atividade.set('status', model.status)
    atividade.set('descricao', model.descricao)
    atividade.set('created_by', usuarioId)
    atividade.set('created_at', new Date())

    return definirData(model.status, model.prazo).then(([_prazo, _termino]) => {
        return db.transaction((t) => {
            return atividade.save(null, {
                method: 'insert',
                transaction: t
            }).then((a) => {
                return db.Chamado.forge({ 'id': chamadoId }).save({
                    'status': model.status,
                    'prazo': _prazo,
                    'termino': _termino,
                    'updated_by': usuarioId,
                    'updated_at': new Date()
                }, { transaction: t })
            })
        })
    }).then(() => Promise.resolve())
}