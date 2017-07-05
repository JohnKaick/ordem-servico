const ctrl = require('./controllers')
const sid = require('./../../helpers/sid')
const errHandler = require('./../../helpers/error-handler')

module.exports.getMany = function (request, reply) {
    return ctrl.getMany().then((model) => {
        return reply(model.toJSON())
    }).catch((err) => {
        return errHandler(request, reply, err)
    })
}

module.exports.getOne = function (request, reply) {
    return sid.translate(request.params.sid, 'Usuario').then((id) => {
        return ctrl.getOne(id)
    }).then((model) => {
        return reply(model.toJSON())
    }).catch((err) => {
        return errHandler(request, reply, err)
    })
}

module.exports.create = function (request, reply) {
    return ctrl.create(request.payload).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler(request, reply, err)
    })
}

module.exports.update = function (request, reply) {
    let md = request.payload
    md.updated_at = new Date()

    return sid.translate(request.params.sid, 'Usuario').then((id) => {
        return ctrl.update(id, md)
    }).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler(request, reply, err)
    })
}