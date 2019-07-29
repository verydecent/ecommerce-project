
exports.up = function(knex) {
  return knex.schema.createTable('images', (table) => {
    table
      .increments();
    table
      .binary('file')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('images');
};
