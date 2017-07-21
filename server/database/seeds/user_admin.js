
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('usuario').del(),
    knex('conta').del(),
    knex('role').del()
  ]).then(function (results) {
    // Inserts seed entries
    return Promise.all([
      knex('usuario').insert({ id: 'abcdefgh', nome: 'john', sobrenome: 'kaick', exibicao: 'john kaick', email: 'john.kaick@gmail.com', created_at: new Date() }),
      knex('conta').insert({ id: '1', usuario_id: 'abcdefgh', login: 'john.kaick@gmail.com', password_hash: 'sha1$3I7HRwy7$cbfdac6008f9cab4083784cbd1874f76618d2a97', bloqueado: false }),
      knex('role').insert({ id: '1', usuario_id: 'abcdefgh', chave: 'admin' }),
    ])

  });
};
