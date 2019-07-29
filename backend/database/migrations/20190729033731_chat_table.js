
exports.up = function(knex) {
  return knex.schema.createTable('chat', (table) => {
    table
      .increments();
    table
      .integer('item_id')
      .notNullable()
      .references('items.id')
      .onDelete('CASCADE');
    table
      .integer('merchant_user_id')
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
    table
      .integer('inquiring_user_id')
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('chat');
};
