
exports.up = function(knex) {
  return knex.schema.createTable('users_feedback', (table => {
    table
      .integer('item_id')
      .unsigned()
      .notNullable()
      .references('items.id')
      .onDelete('CASCADE');
    table
      .integer('publisher_user_id')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
    table
      .integer('recipient_user__id')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
    table
      .text('feedback_description')
      .notNullable();
  }));
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users_feedback'); 
};
