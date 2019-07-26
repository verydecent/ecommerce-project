
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, posted_by_user_id: 1, price: 800, shipping_price: 10, brand: 'Nike', title: 'test 1', description: 'test-description', category: 'footwear', size: 'Medium', color: 'Red'},
        {id: 2, posted_by_user_id: 2, price: 32, shipping_price: 10, brand: 'Adidas', title: 'test 2', description: 'test-description', category: 'footwear', size: 'Medium', color: 'Black'},
        {id: 3, posted_by_user_id: 3, price: 1030, shipping_price: 10, brand: 'Ralph Lauren', title: 'test 3', description: 'test-description', category: 'bottoms', size: 'Medium', color: 'Blue'},
        {id: 4, posted_by_user_id: 1, price: 1090, shipping_price: 10, brand: 'Supreme', title: 'test 4', description: 'test-description', category: 'outerwear', size: 'Medium', color: 'Green'},
        {id: 5, posted_by_user_id: 2, price: 100, shipping_price: 10, brand: 'Reebok', title: 'test 5', description: 'test-description', category: 'footwear', size: 'Medium', color: 'White'},
        {id: 6, posted_by_user_id: 3, price: 100, shipping_price: 10, brand: 'Nike', title: 'test 6', description: 'test-description', category: 'footwear', size: 'Medium', color: 'Navy'},
        {id: 7, posted_by_user_id: 1, price: 50, shipping_price: 10, brand: 'BUM', title: 'test 7', description: 'test-description', category: 'tops', size: 'Medium', color: 'Orange'},
        {id: 8, posted_by_user_id: 2, price: 120, shipping_price: 10, brand: 'Stone Island', title: 'test 8', description: 'test-description', category: 'outerwear', size: 'Medium', color: 'Teal'},
        {id: 9, posted_by_user_id: 3, price: 10, shipping_price: 10, brand: 'ACRYONYM', title: 'test 9', description: 'test-description', category: 'outerwear', size: 'Medium', color: 'Aqua'},
        {id: 10, posted_by_user_id: 4, price: 85, shipping_price: 10, brand: 'Arcteryx veilance', title: 'test 10', description: 'test-description', category: 'bottoms', size: 'Medium', color: 'Black'},
        {id: 11, posted_by_user_id: 5, price: 90, shipping_price: 10, brand: 'Pony', title: 'test 11', description: 'test-description', category: 'footwear', size: 'Medium', color: 'Grey'},
        {id: 12, posted_by_user_id: 4, price: 100, shipping_price: 10, brand: 'New Balance', title: 'test 12', description: 'test-description', category: 'footwear', size: 'Medium', color: 'Blue'},
        {id: 13, posted_by_user_id: 5, price: 47, shipping_price: 10, brand: 'Air Jordan', title: 'test 13', description: 'test-description', category: 'footwear', size: 'Medium', color: 'Red'},
        {id: 14, posted_by_user_id: 2, price: 90000, shipping_price: 10, brand: 'Visvim', title: 'test 14', description: 'test-description', category: 'accessory', size: 'Medium', color: 'Orange'},
        {id: 15, posted_by_user_id: 4, price: 300, shipping_price: 10, brand: 'Converse', title: 'test 15', description: 'test-description', category: 'footwear', size: 'Medium', color: 'Ash Grey'},
        {id: 16, posted_by_user_id: 5, price: 8, shipping_price: 10, brand: 'Raf Simons', title: 'test 16', description: 'test-description', category: 'accessory', size: 'Medium', color: 'Brown'},
        {id: 17, posted_by_user_id: 1, price: 17, shipping_price: 10, brand: 'Rick Owens', title: 'test 17', description: 'test-description', category: 'footwear', size: 'Medium', color: 'Yellow'},
      ]);
    });
};