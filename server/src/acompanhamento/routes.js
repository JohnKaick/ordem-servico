const handlers = require('./handlers.js')

module.exports = [
    {
        path: '/ordem-servico/acompanhamento/chamado/{chamadoSid}',
        method: 'GET',
        handler: handlers.getMany,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/acompanhamento/{id}',
        method: 'GET',
        handler: handlers.getOne,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/acompanhamento/{chamadoSid}',
        method: 'PUT',
        handler: handlers.create,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/acompanhamento/{id}',
        method: 'DELETE',
        handler: handlers.destroy,
        config: {
            auth: false
        }
    },
]