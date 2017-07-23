const db = require('./../../database')
const sid = require('./../../helpers/sid')
const errHandler = require('./../../helpers/error-handler')
const KnownError = errHandler.KnownError

module.exports = function (request, reply) {
    let _chamadoId = null

    return sid.translate(request.params.chamadoSid, 'Chamado').then((chamadoId) => {
        _chamadoId = chamadoId

        return db.Feedback.where({ 'chamado_id': chamadoId }).fetch()
    }).then((f) => {
        if (f) {
            throw new KnownError('unauthorized', 'Obrigado, o feedback já foi enviado.')
        }

        return db.Feedback.forge().save({
            'chamado_id': _chamadoId,
            'satisfacao': request.payload.satisfacao,
            'descricao': request.payload.descricao,
            'created_at': new Date()
        })
    }).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}