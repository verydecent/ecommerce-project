
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {posted_by_user_id: 1, price: 99, shipping_price: 5.00, title: 'Rare Cap', description: 'dead', category: 'hat', size: 'adjustable', color: 'red'},
        {posted_by_user_id: 1, price: 99, shipping_price: 5.00, title: 'Rare Sweater', description: 'dead', category: 'wool sweater', size: 'medium', color: 'navy'},
        {posted_by_user_id: 2, price: 99, shipping_price: 5.00, title: 'Rare Jacket', description: 'dead', category: 'leather jacket', size: 'medium', color: 'black'},
        {posted_by_user_id: 3, price: 99, shipping_price: 5.00, title: 'Rare Jeans', description: 'dead', category: 'denim jeans', size: '30', color: 'blue'}
      ]);
    });
};
