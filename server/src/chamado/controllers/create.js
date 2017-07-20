const db = require('./../../../database')
const responsavel = require('./responsavel')
const moment = require('moment')
const Promise = require('bluebird')

const numOS = function (tipo) {
    let _os = null

    if (tipo == 'incidente') _os = "REP0"
    else _os = "REQ0"

    return db.knex('chamado')
        .max('id as num')
        .then((id) => {
            let _id = id[0].num
            if (!_id) {
                _os = _os + 1
            } else {
                _os = _os + (_id + 1)
            }
            return Promise.resolve(_os)
        })
}

const prazo = function (criticidade) {
    let _prazo = null

    if (criticidade === 'baixo') _prazo = moment().add(3, 'days')
    if (criticidade === 'medio') _prazo = moment().add(2, 'days')
    if (criticidade === 'alto') _prazo = moment().add(1, 'days')

    let dateFormat = new Date(_prazo)

    return Promise.resolve(dateFormat)
}

const area = function (tipo, categoria) {
    let _area = null

    if (tipo == 'incidente' && categoria == 'sistema') _area = 'tecnico'
    else if (tipo == 'incidente' && categoria == 'infraestrutura') _area = 'tecnico'
    else _area = 'admin'

    return Promise.resolve(_area)
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
        return numOS(md.tipo)
    }).then((osId) => {
        md.os = osId
        return prazo(md.criticidade)
    }).then((crit) => {
        md.prazo = crit
        return area(md.tipo, md.categoria)
    }).then((a) => {
        md.area_responsavel = a
        return db.Chamado.forge(md).save()
    })
}