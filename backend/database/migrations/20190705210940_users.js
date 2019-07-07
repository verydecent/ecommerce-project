
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table
      .increments();
    table
      .string('email', 128)
      .notNullable()
      .unique();
    table
      .string('username', 128)
      .notNullable()
      .unique();
    table
      .string('password', 128)
      .notNullable()
      .unique();
    table
      .string('location', 128);
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now());
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
