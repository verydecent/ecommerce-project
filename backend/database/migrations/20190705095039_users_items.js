
exports.up = function(knex) {
  return knex.schema.createTable('users_items', (table) => {
    table
      .increments();
    table
      .integer('users_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
    // Come back and try onDelete('RESTRICT') and onUpdate('CASCASDE')?
    table
      .integer('items_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('items');
      // Come back and try onDelete('RESTRICT') and onUpdate('CASCASDE')?
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users_items');
};
