
exports.up = function(knex) {
  return knex.schema.createTable('users_items_feedback', (table) => {
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
    table
      .text('description', 4096);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users_items_feedback'); 
};
