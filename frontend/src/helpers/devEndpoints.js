module.exports = {
  authorizeUser,
  likedItems,
  getItems,
  getUser
}

function authorizeUser() {
  return 'http://localhost:5000/api/authorize-user';
}

function likedItems (id) {
  if (id) {
    return `http://localhost:5000/api/account/liked-items/${id}`;
  }
  // For post request
  return 'http://localhost:5000/api/account/liked-items';
};

function getItems(id) {
  if (id) {
    return `http://localhost:5000/api/items/${id}`
  }
  // For multiple items vs 1 item
  return 'http://localhost:5000/api/items';
}

function getUser(id) {
  return `http://localhost:5000/api/users/${id}`
}