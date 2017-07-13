const db = require('./../../../database')
const Promise = require('bluebird')

module.exports = function (usuarioId, md) {
    return db.transaction((t) => {
        return db.Usuario.forge({ 'id': usuarioId }).save({
            'nome': md.nome,
            'sobrenome': md.sobrenome,
            'exibicao': md.exibicao,
            'email': md.email,
            'updated_at': new Date()
        }, { method: 'insert', transacting: t }).then((u) => {
            return db.Conta.where({ 'usuario_id': usuarioId }).save({
                'login': md.email,
            }, { method: 'insert', transacting: t }).then((c) => {
                return db.Role.where({ 'usuario_id': usuarioId }).save({
                    'chave': md.chave
                })
            })
        })
    }).then(() => Promise.resolve())
}