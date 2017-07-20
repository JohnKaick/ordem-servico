const knex = require('knex')({
    client: process.env.DB_DIALECT,
    connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
})

const bookshelf = require('bookshelf')(knex)

bookshelf.plugin('visibility')
bookshelf.plugin(require('bookshelf-cascade-delete'))

bookshelf.Usuario = require('./models/usuario')(bookshelf)
bookshelf.Conta = require('./models/conta')(bookshelf)
bookshelf.Role = require('./models/role')(bookshelf)
bookshelf.Chamado = require('./models/chamado')(bookshelf)
bookshelf.Atividade = require('./models/atividade')(bookshelf)
bookshelf.Feedback = require('./models/feedback')(bookshelf)
bookshelf.ImgChamado = require('./models/img-chamado')(bookshelf)

module.exports = bookshelf