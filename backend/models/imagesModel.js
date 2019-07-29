const db = require('../database/dbConfig');

module.exports = {
  getUserPicture,
}

function getUserPicture(image_id) {
  return db('images').where({ id: image_id }).first();
}