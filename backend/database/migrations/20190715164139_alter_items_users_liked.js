
exports.up = function(knex) {
  return knex.schema.alterTable('items_users_liked', (table) => {
    table
      .primary(['user_id', 'item_id'], 'id');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('items_users_liked', (table) => {
    table
      .dropColumn(['user_id', 'item_id'], 'id')
  });
};
