
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {id: 1, url: 'https://res.cloudinary.com/dvoplizdv/image/upload/v1564397731/ac1r9cooqtfkcvwspxle.png'},
      ]);
    });
};
