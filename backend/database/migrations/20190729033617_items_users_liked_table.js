
exports.up = function(knex) {
  return knex.schema.createTable('items_users_liked', (table) => {
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
    table
      .integer('item_id')
      .unsigned()
      .notNullable()
      .references('items.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items_users_liked');
};
