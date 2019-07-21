
exports.up = function(knex) {
  return knex.schema.createTable('feedback', (table => {
    table
      .increments();
    table
      .integer('author_user_id')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
    table
      .text('description')
      .notNullable();
  }));
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('feedback'); 
};
