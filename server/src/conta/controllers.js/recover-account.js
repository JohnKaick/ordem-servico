const db = require('./../../../../database')
const checkAccess = require('./check-access')
const uuid = require('uuid')

/*
const sendEmail = function (conta) {
    return new Promise((resolve, reject) => {
        let mail = new Mailer({
            titulo: 'Recuperar conta',
            destinatarios: [{
                Email: conta.relations.usuario.get('email'),
                Nome: conta.relations.usuario.get('nome')
            }],
            templateName: 'recover-account.hbs',
            model: {
                token_senha: conta.get('token_senha'),
                email: conta.get('login')
            }
        })
        mail.send()
        resolve()
    })
}
*/

module.exports = function (request, reply) {
    let _conta = null

    db.Conta.where({ 'login': request.payload.email }).fetch({
        withRelated: ['usuario']
    }).then((c) => {
        if (!c) throw new KnownError('unauthorized', 'email_invalid')
        _conta = c.toJSON()
        return checkAccess.email(_conta)
    }).then(() => {
        return db.Conta.forge({ 'id': _conta.id }).save({
            'token_senha': uuid.v4()
        })
    }).then(() => {
        Promise.resolve({ success: true })
    })
}