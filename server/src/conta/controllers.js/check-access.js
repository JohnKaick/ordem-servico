const Promise = require('bluebird')
const passwordHash = require('password-hash')
const eh = require('./../../../../helpers/error-handler')
const KnownError = eh.KnownError

// Checa todos os possiveis motivos do usuário não poder se conectar.
module.exports.login = function (conta, password) {
    return new Promise((resolve, reject) => {
        if (!conta || !passwordHash.verify(password, conta.password_hash)) {
            reject(new KnownError('unauthorized', 'conta_invalid'))
        }
        if (conta.bloqueado) {
            reject(new KnownError('unauthorized', 'conta_blocked'))
        }
        if (!conta.email_verificado) {
            reject(new KnownError('unauthorized', 'confirm_invalid'))
        }
        resolve()
    })
}

module.exports.email = function (conta) {
    return new Promise((resolve, reject) => {
        if (conta.bloqueado) {
            reject(new KnownError('unauthorized', 'conta_blocked'))
        }
        return resolve()
    })
}

module.exports.password = function (conta, password) {
    return new Promise((resolve, reject) => {
        if (!passwordHash.verify(password, conta.password_hash)) {
            reject(new KnownError('unauthorized', 'password_invalid'))
        }
        return resolve()
    })
}
