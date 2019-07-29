
exports.up = function(knex) {
  return knex.schema.createTable('items_images', (table) => {
    table
    .integer('item_id')
    .unsigned()
    .notNullable()
    .references('items.id')
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
  return knex.schema.dropTableIfExists('items_mages');
};
