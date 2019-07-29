
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {id: 1, url: 'https://d32ogoqmya1dw8.cloudfront.net/images/serc/empty_user_icon_256.v2.png'},
      ]);
    });
};
