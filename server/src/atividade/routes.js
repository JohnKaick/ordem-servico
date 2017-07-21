const handlers = require('./handlers.js')

module.exports = [
    {
        path: '/ordem-servico/atividade/chamado/{chamadoSid}',
        method: 'GET',
        handler: handlers.getMany,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/atividade/{sid}',
        method: 'GET',
        handler: handlers.getOne,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/atividade/{chamadoSid}',
        method: 'PUT',
        handler: handlers.create,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/atividade/{sid}',
        method: 'DELETE',
        handler: handlers.destroy,
        config: {
            auth: false
        }
    },
]