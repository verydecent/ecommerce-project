
exports.up = function(knex) {
  return knex.schema.createTable('items', (table) => {
    table
      .increments()
    table
      .integer('posted_by_user_id')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
    table
      .integer('purchased_by_user_id')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
    // defaultTo chain might be a problem because of how we are entering the true boolean
    table
      .boolean('is_available')
      .defaultTo('t');
    table
      .integer('price')
      .notNullable();
    table
      .integer('shipping_price')
      .notNullable();
    table
      .string('title', 128)
      .notNullable()
    table
      .text('description', 4096)
      .notNullable()
    table
      .string('category', 128)
      .notNullable()
    table
      .string('size', 128)
      .notNullable()
    table
      .string('color', 128)
      .notNullable()
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now());
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items');
};
