module.exports = function (server) {

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'client/source/',
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
}