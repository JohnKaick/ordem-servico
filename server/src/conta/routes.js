const handlers = require('./handlers.js')

module.exports = [
    {
        path: '/ordem-servico/conta/authenticate',
        method: 'POST',
        handler: handlers.authenticate,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/conta/recover-account',
        method: 'POST',
        handler: handlers.recoverAccount,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/conta/confirm-recover/{token}',
        method: 'POST',
        handler: handlers.confirmRecover,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/conta/change-password',
        method: 'POST',
        handler: handlers.changePassword,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/conta/block-access/{usuario_id?}',
        method: 'POST',
        handler: handlers.blockAccess,
        config: {
            auth: false
        }
    },
]