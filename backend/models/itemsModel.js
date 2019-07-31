const db = require('../database/dbConfig');

module.exports = {
  postItem,
  getItems,
  getItemsById,
  getItemsByUserId
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
  return db('items');
}

function getItemsByUserId(id) {
  return db('items').where({ posted_by_user_id: id });
}