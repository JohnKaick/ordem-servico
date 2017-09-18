const Promise = require('bluebird')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

module.exports = function (connectionKey, conta, role) {
    return new Promise((resolve, reject) => {

        // Informações criptografadas no token
        let tokenData = {
            id: conta.relations.usuario.id,
            usuario_id: conta.relations.usuario.id,
            exibicao: conta.relations.usuario.attributes.exibicao,
            login: conta.attributes.login,
            connectionKey: connectionKey,
            scope: role,
        }

        // Configuração do token
        let config = {
            expiresIn: '7 days'
        }

        // Callback
        let callback = (err, token) => {
            if (err) {
                throw err
            } else {
                resolve({
                    token: token,
                    usuario: {
                        id: conta.relations.usuario.id,
                        exibicao: conta.relations.usuario.attributes.exibicao,
                        email: conta.relations.usuario.attributes.email
                    },
                    permissao: role
                })
            }
        }

        jwt.sign(tokenData, process.env.JWT_SECRET, config, callback)

    })
}