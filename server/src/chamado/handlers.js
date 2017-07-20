const ctrl = require('./controllers')
const sid = require('./../../helpers/sid')
const errHandler = require('./../../helpers/error-handler')

module.exports.getMany = function (request, reply) {
    return ctrl.getMany().then((model) => {
        return reply(model.toJSON())
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}

module.exports.getOne = function (request, reply) {
    return sid.translate(request.params.sid, 'Chamado').then((id) => {
        return ctrl.getOne(id)
    }).then((model) => {
        return reply(model.toJSON())
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}

module.exports.create = function (request, reply) {
    return ctrl.create(request.payload, request.auth.credentials.id).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}

module.exports.update = function (request, reply) {
    let md = request.payload
    md.updated_by = request.auth.credentials.id
    md.updated_at = new Date()

    return sid.translate(request.params.sid, 'Chamado').then((id) => {
        return ctrl.update(id, md)
    }).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}

module.exports.destroy = function (request, reply) {
    let md = {
        deleted_by: request.auth.credentials.id,
        deleted_at: new Date()
    }

    return sid.translate(request.params.sid, 'Chamado').then((id) => {
        return ctrl.destroy(id, md)
    }).then((model) => {
        return reply({ success: true })
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}