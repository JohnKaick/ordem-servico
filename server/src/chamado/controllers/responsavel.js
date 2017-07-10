const Promise = require('bluebird')

module.exports = function (tipo, categoria) {
    let _resp = null
    return new Promise((resolve, reject) => {
        if (tipo === 'incidente' && categoria === 'sistema' || tipo === 'incidente' && categoria === 'infraestrutura') {
            _resp = 'tecnico'
        } else {
            _resp = 'admin'
        }
        resolve(_resp)
    })
}