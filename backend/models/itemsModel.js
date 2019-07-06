const db = require('../database/dbConfig');

module.exports = {
  postItem,
  getItems,
  getItemsById,
}

function postItem(item) {
  return db('items').insert(item).then(ids => {
    db('users_items').insert()
  });
}

function getItemsById(id) {
  return db('users_items').where({ id: id });
}

function getItems() {
  return db('users_items');
}