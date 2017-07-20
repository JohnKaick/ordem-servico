const ctrl = require('./controllers')
const sid = require('./../../helpers/sid')
const errHandler = require('./../../helpers/error-handler')

module.exports.getMany = function (request, reply) {
    return sid.translate(request.params.chamadoSid, 'Chamado').then((id) => {
        return ctrl.getMany(id)
    }).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}

module.exports.getOne = function (request, reply) {
    return sid.translate(request.params.sid, 'Usuario').then((id) => {
        return ctrl.getOne(id)
    }).then((model) => {
        return reply(model.toJSON())
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}

module.exports.create = function (request, reply) {
    return sid.translate(request.params.chamadoSid, 'Chamado').then((id) => {
        return ctrl.create(request.payload, id)
    }).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}

module.exports.destroy = function (request, reply) {
    return sid.translate(request.params.sid, 'Usuario').then((id) => {
        return ctrl.destroy(id)
    }).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}