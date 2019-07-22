exports.up = function(knex) {
  return knex.schema.createTable('users_feedback', (table => {
    table
      .increments();
    table
      .integer('feedback_id')
      .unsigned()
      .notNullable()
      .references('feedback.id')
      .onDelete('CASCADE');
    table
      .integer('recipient_user_id')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
  }));
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users_feedback'); 
};