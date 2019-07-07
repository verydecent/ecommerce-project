
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {users_id: 1, price: 99, title: 'Rare Cap', description: 'dead', category: 'hat', size: 'adjustable', color: 'red'},
        {users_id: 1, price: 99, title: 'Rare Sweater', description: 'dead', category: 'wool sweater', size: 'medium', color: 'navy'},
        {users_id: 2, price: 99, title: 'Rare Jacket', description: 'dead', category: 'leather jacket', size: 'medium', color: 'black'},
        {users_id: 3, price: 99, title: 'Rare Jeans', description: 'dead', category: 'denim jeans', size: '30', color: 'blue'}
      ]);
    });
};
