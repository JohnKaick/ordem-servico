const shortId = require('shortid')

module.exports = function (bookshelf) {
    return bookshelf.Model.extend({
        tableName: 'chamado',
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
        },
        acompanhamentos: function () {
            return this.hasMany(bookshelf.Acompanhamento)
        },
        feedbacks: function () {
            return this.hasMany(bookshelf.Feedback)
        },
        img_chamados: function () {
            return this.hasMany(bookshelf.ImgChamado)
        }
    })
}