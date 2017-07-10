const db = require('./../../../database')
const responsavel = require('./responsavel')

module.exports = function (model, usuarioId) {
    let md = model
    md.status = 'aberto'
    md.created_by = usuarioId
    md.created_at = new Date()

    const numOS = function () { }

    return responsavel(md.tipo, md.categoria).then((resp) => {
        md.responsavel = resp
    })

    return db.Chamado.forge(md).save()
}