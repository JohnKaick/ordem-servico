const shortId = require('shortid')

module.exports = function (bookshelf) {
    return bookshelf.Model.extend({
        tableName: 'acompanhamento',
        hidden: ['id', 'chamado_id'],
        constructor: function () {
            bookshelf.Model.apply(this, arguments)
            this.on('saving', function (model, attrs, options) {
                if (!model.isNew()) {
                    return
                }
                model.set('sid', shortId.generate())
            })
        },
        chamado: function () {
            return this.belongsTo(bookshelf.Chamado)
        }
    })
}