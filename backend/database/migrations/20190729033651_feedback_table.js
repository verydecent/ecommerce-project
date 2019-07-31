exports.up = function(knex) {
  return knex.schema.createTable('feedback', (table) => {
    table
      .increments();
    table
      .integer('item_id')
      .unsigned()
      .notNullable()
      .references('items.id')
      .onDelete('CASCADE');
    table
      .integer('author_user_id')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
    table
      .integer('rating')
      .notNullable();
    table
      .text('description')
      .notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('feedback'); 
};
