const Promise = require('bluebird')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

module.exports = function (conta, role) {
    return new Promise((resolve, reject) => {

        // Informações criptografadas no token
        let tokenData = {
            id: conta.usuario.id,
            usuario_id: conta.usuario_id,
            exibicao: conta.usuario.exibicao,
            login: conta.login,
            scope: role,
        }

        // Configuração do token
        let config = {
            expiresIn: '1 days'
        }

        // Callback
        let callback = (err, token) => {
            if (err) {
                throw err
            } else {
                resolve({
                    token: token,
                    usuario: {
                        id: conta.usuario.id,
                        exibicao: conta.usuario.exibicao,
                        email: conta.usuario.email
                    },
                    permissao: role
                })
            }
        }

        jwt.sign(tokenData, process.env.JWT_SECRET, config, callback)

    })
}