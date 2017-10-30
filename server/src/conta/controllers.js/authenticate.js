const db = require('./../../../../database')
const Promise = require('bluebird')
const checkAccess = require('./check-access')
const generateToken = require('./generate-token')
const getRole = require('./get-role')

module.exports = function (login, password) {
    let _conta = null
    let _role = null

    db.Conta.where('login', login)
        .fetch({ withRelated: ['usuario'] })
        .then((c) => {
            _conta = c.toJSON()
            return checkAccess.login(_conta, password)
        }).then(() => {
            return getRole(_conta.usuario_id)
        }).then((r) => {
            _role = r.toJSON()
            return generateToken(_conta, _role)
        }).then((token) => {
            Promise.resolve(token)
        })
}