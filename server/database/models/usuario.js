const shortId = require('shortid')

module.exports = function (bookshelf) {
    return bookshelf.Model.extend({
        tableName: 'usuario',
        constructor: function () {
            bookshelf.Model.apply(this, arguments)
            this.on('saving', function (model, attrs, options) {
                if (!model.isNew()) {
                    return
                }
                model.set('id', shortId.generate())
            })
        },
        contas: function () {
            return this.hasMany(bookshelf.Conta)
        },
        roles: function () {
            return this.hasMany(bookshelf.Role)
        },
        chamados: function () {
            return this.hasMany(bookshelf.Chamado)
        },
    })
}