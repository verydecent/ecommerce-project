
exports.up = function(knex) {
  return knex.schema.createTable('items', (table) => {
    table
      .increments();
    table
      .integer('users_id', 128)
      .unsigned()
      .notNullable()
      .references('users.id')
    table 
      .string('title', 128)
      .notNullable()
    table
      .text('description')
      .notNullable()
    table
      .string('category', 128)
      .notNullable();
    table
      .string('size', 64)
      .notNullable();
    table
      .string('color', 128)
      .notNullable();
    table
      .integer('price')
      .notNullable();
    table
      .timestamp('createdAt')
      .defaultTo(knex.fn.now());
    table
      .timestamp('updatedAt')
      .defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items');
};
