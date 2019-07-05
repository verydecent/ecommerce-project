
exports.up = function(knex) {
  return knex.schema.createTable('items', (table) => {
    table
      .increments();
    table
      .string('title', 128)
      .notNullable();
    table
      .text('description', 4096)
      .notNullable();
    table
      .string('category', 128);
    table
      .string('color', 128)
      .notNullable();
    table
      .string('size', 32)
      .notNullable();
    table
      .bigInteger('price')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items');
};
