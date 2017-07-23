const db = require('./../../../database')
const passwordHash = require('password-hash')
const eh = require('./../../../helpers/error-handler')
const KnownError = eh.KnownError

module.exports = function (model) {

    let usuario = new db.Usuario()
    usuario.set('nome', model.nome)
    usuario.set('sobrenome', model.sobrenome)
    usuario.set('exibicao', model.exibicao ? model.exibicao : model.nome)
    usuario.set('email', model.email)
    usuario.set('created_at', new Date())

    let conta = new db.Conta()
    conta.set('login', model.email)
    conta.set('password_hash', passwordHash.generate('password123'))
    conta.set('bloqueado', model.bloqueado)

    let role = new db.Role()
    role.set('chave', model.chave)

    return db.Usuario.query((qb) => {
        qb.where('email', usuario.get('email'))
    }).fetch().then((u) => {
        if (u) throw new KnownError('conflict', 'Este e-mail já está cadastrado.')
        return db.transaction((t) => {
            return usuario.save({}, {
                method: 'insert',
                transacting: t
            }).then((u) => {
                conta.set('usuario_id', u.id)
                role.set('usuario_id', u.id)
                return conta.save({}, {
                    method: 'insert',
                    transacting: t
                })
            }).then((c) => {
                return role.save({}, {
                    method: 'insert',
                    transacting: t
                })
            })
        })
    }).then(() => Promise.resolve(usuario))
}