const shortId = require('shortid')

module.exports = function (bookshelf) {
    return bookshelf.Model.extend({
        tableName: 'role',
        hidden: ['id', 'usuario_id'],
        constructor: function () {
            bookshelf.Model.apply(this, arguments)
            this.on('saving', function (model, attrs, options) {
                if (!model.isNew()) {
                    return
                }
                model.set('sid', shortId.generate())
            })
        },
        usuario: function () {
            return this.belongsTo(bookshelf.Usuario)
        }
    })
}