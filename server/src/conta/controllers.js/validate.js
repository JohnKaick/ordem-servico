const jwt = require('jsonwebtoken')
const Promise = require('bluebird')

module.exports = function (token) {

    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            resolve({ valid: !err })
        })
    })

}