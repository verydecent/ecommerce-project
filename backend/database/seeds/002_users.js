
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'ta1@m.com', username: 'one', password: '$2a$14$erhlcnxVwFMubEL.TEdAMuEYzyzzpAHEYnIayB1NCk2Kqe0uuYwEO', location: 'Spain'},
        {id: 2, email: 'ta2@m.com', username: 'two', password: '$2a$14$EakMncJlcqhkNceIxbJWVO.KD.xA.I/wU/N0NT/JqCBFQ5X6.mwQK', location: 'Uganda'},
        {id: 3, email: 'ta3@m.com', username: 'three', password: '$2a$14$0rxZVWhsbE3oF3Fo1191Yu39GMkbRVRo.W3DmvHuhwtIWuRYjhhuG', location: 'Britain'},
        {id: 4, email: 'ta4@m.com', username: 'four', password: '$2a$14$s40f9ewRbuv3bwy.sdOCi.zwrWGHrncZy/jKjrny8nP68K08PnXqe', location: 'California'},
        {id: 5, email: 'ta5@m.com', username: 'five', password: '$2a$14$foT7gPr8giyMgkI8w/M6Ju24ULJCu64w2mNdT/9PQcB8T.QZJohRO', location: 'South Korea'},
      ]);
    });
};
