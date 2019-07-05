const db = require('../database/dbConfig');

module.exports = {
  postItem,
};

function postItem(item) {
  return db('items').insert(item);
}