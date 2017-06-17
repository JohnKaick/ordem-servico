const routesOptions = {
    routes: './../src/**/routes.js',
}

module.exports = [
    { register: require('inert') },
    { register: require('hapi-boom-decorators') },
    { register: require('hapi-routes'), options: routesOptions }
]