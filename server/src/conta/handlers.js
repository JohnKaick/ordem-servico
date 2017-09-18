const ctrl = require('./controllers')
const sid = require('./../../helpers/sid')
const errHandler = require('./../../helpers/error-handler')

module.exports.authenticate = function (request, reply) {
    return ctrl.authenticate(request.payload.login, request.payload.password).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}

module.exports.recoverAccount = function (request, reply) {
    return ctrl.recoverAccount(request.payload.email).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}

module.exports.confirmRecover = function (request, reply) {
    return ctrl.confirmRecover(request.params.token).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}

module.exports.changePassword = function (request, reply) {
    return ctrl.changePassword(request.payload.senha_atual, request.payload.nova_senha).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}

module.exports.blockAccess = function (request, reply) {
    return ctrl.blockAccess(request.params.usuarioId).then((model) => {
        return reply(model)
    }).catch((err) => {
        return errHandler.resolve(request, reply, err)
    })
}