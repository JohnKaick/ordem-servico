const db = require('./../../../database')
const passwordHash = require('password-hash')

module.exports = function (model) {

    //faltar inserir a role
    let md = {
        nome: model.nome,
        sobrenome: model.sobrenome,
        exibicao: model.exibicao,
        email: model.email,
        password_hash: passwordHash.generate(model.senha),
        created_at: new Date()
    }

    return db.Usuario.forge(md).save()
}