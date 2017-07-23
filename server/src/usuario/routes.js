const handlers = require('./handlers.js')

module.exports = [
    {
        path: '/ordem-servico/usuario',
        method: 'GET',
        handler: handlers.getMany,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/usuario',
        method: 'PUT',
        handler: handlers.createAccount,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/usuario/{contaSid}',
        method: 'POST',
        handler: handlers.update,
        config: {
            auth: false
        }
    },
]