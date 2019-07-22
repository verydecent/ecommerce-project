
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, posted_by_user_id: 1, price: 100, shipping_price: 10, brand: 'amex black', title: 'test 1', description: 'test-description', category: 'clothing', size: 'Medium', color: 'Black'},
        {id: 2, posted_by_user_id: 2, price: 100, shipping_price: 10, brand: 'amex black', title: 'test 2', description: 'test-description', category: 'clothing', size: 'Medium', color: 'Black'},
        {id: 3, posted_by_user_id: 3, price: 100, shipping_price: 10, brand: 'amex black', title: 'test 3', description: 'test-description', category: 'clothing', size: 'Medium', color: 'Black'},
        {id: 4, posted_by_user_id: 1, price: 100, shipping_price: 10, brand: 'amex black', title: 'test 4', description: 'test-description', category: 'clothing', size: 'Medium', color: 'Black'},
        {id: 5, posted_by_user_id: 2, price: 100, shipping_price: 10, brand: 'amex black', title: 'test 5', description: 'test-description', category: 'clothing', size: 'Medium', color: 'Black'},
        {id: 6, posted_by_user_id: 3, price: 100, shipping_price: 10, brand: 'amex black', title: 'test 6', description: 'test-description', category: 'clothing', size: 'Medium', color: 'Black'},
        {id: 7, posted_by_user_id: 1, price: 100, shipping_price: 10, brand: 'amex black', title: 'test 7', description: 'test-description', category: 'clothing', size: 'Medium', color: 'Black'},
        {id: 8, posted_by_user_id: 2, price: 100, shipping_price: 10, brand: 'amex black', title: 'test 8', description: 'test-description', category: 'clothing', size: 'Medium', color: 'Black'},
        {id: 9, posted_by_user_id: 3, price: 100, shipping_price: 10, brand: 'amex black', title: 'test 9', description: 'test-description', category: 'clothing', size: 'Medium', color: 'Black'},
      ]);
    });
};