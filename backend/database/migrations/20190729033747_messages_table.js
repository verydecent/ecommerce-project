
exports.up = function(knex) {
  return knex.schema.createTable('messages', (table) => {
    table
      .increments();
    table
      .integer('chat_id')
      .notNullable()
      .references('chat.id')
      .onDelete('CASCADE');
    table
      .integer('author_id')
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
    table
      .text('message')
      .notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('messages');
};
