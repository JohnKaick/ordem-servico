const db = require('./../../../../database')
const Promise = require('bluebird')
const passwordHash = require('password-hash')
const checkAccess = require('./check-access')
const generateToken = require('./generate-token')
const eh = require('./../../../../helpers/error-handler')
const KnownError = eh.KnownError

module.exports = function (login, password) {
    let _conta = null
    let _role = null

    db.Conta.where('login', login)
        .fetch({ withRelated: ['usuario'] })
        .then((c) => {

            _conta = c.toJSON()
            return checkAccess.login(_conta, password)

        }).then(() => {

            return getRoles(_conta.get('usuario_id'))
            
        }).then((roles) => {
            _role = roles
            return sessionManager.create(request, _conta, _role)
        }).then((connectionKey) => {
            return generateToken(connectionKey, _conta, _role)
        }).then((token) => {
            registerAttempt(request, login, password, _conta, true)
            return Promise.resolve(token)
        }).then((token) => {
            reply(token)
        }).catch((err) => {
            registerAttempt(request, login, password, _conta, false).then(() => {
                eh.resolve(request, reply, err)
            }).catch((err) => {
                eh.resolve(request, reply, err)
            })
        })
}