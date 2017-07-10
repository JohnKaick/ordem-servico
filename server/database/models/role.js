const shortId = require('shortid')

module.exports = function (bookshelf) {
    return bookshelf.Model.extend({
        tableName: 'role',
        hidden: ['id', 'usuario_id'],
        usuario: function () {
            return this.belongsTo(bookshelf.Usuario)
        }
    })
}