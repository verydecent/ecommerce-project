module.exports = {
  authorizeUser,
  likedItems,
}

function authorizeUser() {
  return 'http://localhost:5000/api/authorize-user';
}

function likedItems (id) {
  if (id) {
    return `http://localhost:5000/api/account/liked-items/${id}`;
  }
  return 'http://localhost:5000/api/account/liked-items';
};

