const db = require('./../../../../database')
const getRoles = require('./../../../roles/controllers/v2/init-roles')
const sessionManager = require('./../../../../engines/session-manager')
const generateToken = require('./generate-token')
const passwordHash = require('password-hash')
const eh = require('./../../../../helpers/error-handler')
const KnownError = eh.KnownError

const verificado = function (conta, senha) {
    return db.Conta.forge({ 'id': conta.id }).save({
        'token_senha': null,
        'password_hash': passwordHash.generate(senha)
    })
}

module.exports = function (request, reply) {
    let _conta = null
    let _role = null

    db.Conta.where('token_senha', request.params.token)
        .fetch({ withRelated: ['usuario'] }).then((c) => {
            if (!c) throw new KnownError('unauthorized', 'token_invalid')
            _conta = c
            return verificado(_conta, request.payload.nova_senha)
        }).then(() => {
            return getRoles(_conta.get('usuario_id'))
        }).then((roles) => {
            _role = roles
            return sessionManager.create(request, _conta, _role)
        }).then((connectionKey) => {
            return generateToken(connectionKey, _conta, _role)
        }).then((token) => {
            reply(token)
        }).catch((err) => {
            eh.resolve(request, reply, err)
        })
}