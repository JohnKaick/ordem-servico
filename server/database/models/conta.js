const shortId = require('shortid')

module.exports = function (bookshelf) {
    return bookshelf.Model.extend({
        tableName: 'conta',
        hidden: ['id', 'usuario_id'],
        usuario: function () {
            return this.belongsTo(bookshelf.Usuario)
        }
    })
}