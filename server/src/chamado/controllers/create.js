const db = require('./../../../database')
const responsavel = require('./responsavel')
const Promise = require('bluebird')

const numOS = function () {
    let _os = null
    return db.knex('chamado')
        .max('id as num')
        .then((id) => {
            let _id = id[0].num
            if (!_id) {
                _os = "OS-" + 1
            } else {
                _os = "OS-" + (_id + 1)
            }
            return Promise.resolve(_os)
        })
}

module.exports = function (model, usuarioId) {
    let md = {
        tipo: model.tipo,
        categoria: model.categoria,
        criticidade: model.criticidade ? model.criticidade : 'medio',
        titulo: model.titulo,
        descricao: model.descricao,
        status: 'aberto',
        created_by: usuarioId,
        created_at: new Date(),
    }

    return responsavel(md.tipo, md.categoria).then((resp) => {
        md.area_responsavel = resp
        return numOS()
    }).then((osId) => {
        md.os = osId
        return db.Chamado.forge(md).save()
    })
}