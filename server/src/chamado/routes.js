const handlers = require('./handlers.js')

module.exports = [
    {
        path: '/ordem-servico/chamado',
        method: 'GET',
        handler: handlers.getMany,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/chamado/usuario/{usuario_sid}',
        method: 'GET',
        handler: handlers.getManyUsuario,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/chamado/{sid}',
        method: 'GET',
        handler: handlers.getOne,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/chamado',
        method: 'PUT',
        handler: handlers.create,
        config: {
            auth: false
        }
    },
    {
        path: '/ordem-servico/chamado/{sid}',
        method: 'POST',
        handler: handlers.update,
        config: {
            auth: false
        }
    },
    {
        path: '/api/cliente/{sid}',
        method: 'DELETE',
        config: {
            handler: handlers.destroy,
            auth: false
        }
    }
]