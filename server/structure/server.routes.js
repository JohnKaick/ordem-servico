module.exports = function (server) {

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: './public',
                redirectToSlash: true,
                index: true
            }
        },
        config: {
            auth: false
        }
    })

    server.route(require('./../src/chamado/routes'))
    server.route(require('./../src/usuario/routes'))
    server.route(require('./../src/atividade/routes'))
    server.route(require('./../src/feedback/routes'))
}