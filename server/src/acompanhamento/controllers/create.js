const db = require('./../../../database')

const statusOS = function(status) {
    
}

module.exports = function (chamadoId, model) {
    let md = model
    md.chamado_id = chamadoId


    return db.Acompanhamento.forge().save()
}