
exports.up = function(knex) {
  return knex.schema.createTable('users_favorited_items', (table) => {
    table
      .increments();
    table
      .integer('users_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users');
    table
      .integer('items_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('items');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users_favorited_items');
};
