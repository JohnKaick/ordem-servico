
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTableIfNotExists('usuario', function (table) {
            table.string('id', 14).notNullable().primary()
            table.string('nome', 255).notNullable()
            table.string('sobrenome', 255)
            table.string('exibicao', 255)
            table.string('email', 255)
            table.dateTime('created_at')
            table.dateTime('updated_at')
        }),
        knex.schema.createTableIfNotExists('conta', function (table) {
            table.increments('id').primary()
            table.string('usuario_id').references('id').inTable('usuario')
            table.string('login', 255).notNullable()
            table.string('password_hash', 400).notNullable()
            table.boolean('bloqueado')
        }),
        knex.schema.createTableIfNotExists('role', function (table) {
            table.increments('id').primary()
            table.string('usuario_id').references('id').inTable('usuario')
            table.enu('chave', ['admin', 'tecnico', 'solicitante']).notNullable()
        }),
        knex.schema.createTableIfNotExists('chamado', function (table) {
            table.increments('id').primary()
            table.string('sid', 14)
            table.string('responsavel_id').references('id').inTable('usuario')
            table.string('os')
            table.enu('tipo', ['incidente', 'requisição']).notNullable()
            table.enu('categoria', ['sistema', 'infraestrutura', 'telefonia', 'aplicacao_web']).notNullable()
            table.enu('criticidade', ['alto', 'medio', 'baixo']).notNullable()
            table.enu('status', ['aberto', 'pendente', 'fechado', 'vencido']).notNullable()
            table.string('titulo', 255).notNullable()
            table.string('descricao', 1020).notNullable()
            table.enu('area_responsavel', ['tecnico', 'admin'])
            table.date('dt_prevista_termino')
            table.date('dt_termino')
            table.string('created_by', 14)
            table.string('updated_by', 14)
            table.dateTime('created_at')
            table.dateTime('updated_at')
        }),
        knex.schema.createTableIfNotExists('atividade', function (table) {
            table.increments('id').primary()
            table.string('sid', 14)
            table.integer('chamado_id').unsigned().references('id').inTable('chamado')
            table.enu('status', ['aberto', 'pendente', 'fechado', 'vencido']).notNullable()
            table.string('descricao', 510).notNullable()
            table.dateTime('created_at')
        }),
        knex.schema.createTableIfNotExists('feedback', function (table) {
            table.increments('id').primary()
            table.string('sid', 14)
            table.integer('chamado_id').unsigned().references('id').inTable('chamado')
            table.enu('satisfacao', ['muito_satisfeito', 'satisfeito', 'normal', 'insatisfeito', 'muito_insatisfeito']).notNullable()
            table.string('descricao', 1020).notNullable()
            table.dateTime('created_at')
        }),
        knex.schema.createTableIfNotExists('img_chamado', function (table) {
            table.string('id', 14).primary()
            table.integer('chamado_id').unsigned().references('id').inTable('chamado')
            table.string('tamanho')
            table.string('tipo')
            table.string('created_by', 14)
            table.dateTime('created_at')
        }),
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('img_chamado'),
        knex.schema.dropTableIfExists('feedback'),
        knex.schema.dropTableIfExists('atividade'),
        knex.schema.dropTableIfExists('chamado'),
        knex.schema.dropTableIfExists('role'),
        knex.schema.dropTableIfExists('conta'),
        knex.schema.dropTableIfExists('usuario'),
    ])
};
