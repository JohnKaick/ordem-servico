const db = require('./../../../../database')
const checkAccess = require('./check-access')
const Mailer = require('./../../../../engines/mailer')
const uuid = require('uuid')
const eh = require('./../../../../helpers/error-handler')
const KnownError = eh.KnownError

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

module.exports = function (request, reply) {
    let _conta = null

    db.Conta.where({ 'login': request.payload.email }).fetch({
        withRelated: ['usuario']
    }).then((c) => {
        if (!c) throw new KnownError('unauthorized', 'email_invalid')
        _conta = c
        return checkAccess.email(_conta)
    }).then(() => {
        return db.Conta.forge({ 'id': _conta.id }).save({ 'token_senha': uuid.v4() })
    }).then(() => {
        return sendEmail(_conta)
    }).then(() => {
        reply({ success: true })
    }).catch((err) => {
        eh.resolve(request, reply, err)
    })
}