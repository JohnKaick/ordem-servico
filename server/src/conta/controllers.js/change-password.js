const db = require('./../../../../database')
const checkAccess = require('./check-access')
const passwordHash = require('password-hash')
const eh = require('./../../../../helpers/error-handler')

module.exports = function (request, reply) {
    let _conta = null
    let senhaAtual = request.payload.senha_atual
    let novaSenha = request.payload.nova_senha

    db.Conta.where({ 'usuario_id': request.auth.credentials.id })
        .fetch().then((c) => {
            _conta = c
            return checkAccess.password(_conta, senhaAtual)
        }).then(() => {
            return db.Conta.forge({ 'id': _conta.id })
                .save({ 'password_hash': passwordHash.generate(novaSenha) })
        }).then(() => {
            Promise.resolve({ success: true })
        })
}