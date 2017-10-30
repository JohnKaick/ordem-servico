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
    let senhaNova = request.payload.nova_senha

    db.Conta.where('token_senha', request.params.token)
        .fetch({ withRelated: ['usuario'] })
        .then((c) => {
            if (!c) throw new KnownError('unauthorized', 'token_invalid')
            _conta = c.toJSON()
            return verificado(_conta, senhaNova)
        }).then(() => {
            return getRoles(_conta.usuario_id)
        }).then((r) => {
            _role = r.toJSON()
            return generateToken(_conta, _role)
        }).then((token) => {
            Promise.resolve(token)
        })
}