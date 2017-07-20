const db = require('./../../../database')
const Promise = require('bluebird')

const definirData = function (status, prazo) {
    let _prazo = null
    let _termino = null

    if (status === 'aberto') {
        _prazo = new Date()
    } else if (status === 'fechado') {
        _data = new Date()
        _termino = new Date()
    } else {
        _data = new Date(prazo)
    }

    return Promise.resolve([_data, _termino])
}

module.exports = function (model, chamadoId) {
    return new Promise((resolve, reject) => {
        return definirData(md.status, md.prazo).then(([_prazo, _termino]) => {
            return db.transaction((t) => {
                return db.Atividade.forge().save({
                    'chamado_id': chamadoId,
                    'status': model.status,
                    'descricao': model.descricao,
                    'created_by': request.auth.credentials.id,
                    'created_at': new Date()
                }, { transaction: t }).then((a) => {
                    return db.Chamado.forge({ 'id': chamadoId }).save({
                        'status': model.status,
                        'prazo': _prazo,
                        'termino': _termino,
                        'updated_by': request.auth.credentials.id,
                        'updated_at': new Date()
                    })
                })
            })
        }).then(() => resolve())
    })
}