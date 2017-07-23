const ctrl = require('./controllers')
const sid = require('./../../helpers/sid')
const errHandler = require('./../../helpers/error-handler')

module.exports.getMany = function (request, reply) {
    return ctrl.getMany().then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}

module.exports.createAccount = function (request, reply) {
    return ctrl.createAccount(request.payload).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}

module.exports.update = function (request, reply) {
    return sid.translate(request.params.sid, 'Usuario').then((id) => {
        return ctrl.update(id, request.payload)
    }).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}