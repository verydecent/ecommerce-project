
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'user1@mail.com', username: 'test-user1', password: 'password1', location: 'Canada' },
        {id: 2, email: 'user2@mail.com', username: 'test-user2', password: 'password2', location: 'California' },
        {id: 3, email: 'user3@mail.com', username: 'test-user3', password: 'password3', location: 'Mexico' },
        {id: 4, email: 'user4@mail.com', username: 'test-user4', password: 'password4', location: 'Texas' },
      ]);
    });
};
