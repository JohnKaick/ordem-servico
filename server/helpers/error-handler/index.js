module.exports.KnownError = function (type, message) {
    this.type = type
    this.message = message
}

module.exports.resolve = function (request, reply, err) {
    if (err.type) {
        reply[err.type](err.message)
    } else {
        reply.badImplementation(err)
    }
}