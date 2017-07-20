const handlers = require('./handlers.js')

module.exports = [
    {
        path: '/ordem-servico/feedback/{chamadoSid}',
        method: 'PUT',
        handler: handlers,
        config: {
            auth: false
        }
    }
]