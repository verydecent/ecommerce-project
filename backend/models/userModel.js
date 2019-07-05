const db = require('../database/dbConfig');

module.exports = {
  getUsers,
  addUser,
  getUserByEmail
}

function getUsers() {
  return db('users')
}

function addUser(user) {
  return db('users').insert(user, 'id').then(ids => ids[0]);
}

function getUserByEmail(email) {
  return db('users').where({ email: email }).first();
}