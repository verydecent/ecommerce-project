
exports.up = function(knex) {
  return knex.schema.createTable('users_images', (table) => {
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
    table
      .integer('image_id')
      .unsigned()
      .notNullable()
      .references('images.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users_images');
};
