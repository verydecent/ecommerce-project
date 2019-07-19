module.exports = {
  authorizeUser,
  likedItems,
  getItems,
  getUser,
  purchaseItem,
  getBoughtItems,
  getSoldItems,
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

function purchaseItem(id) {
  return `http://localhost:5000/api/purchase-item/${id}`;
}

function getBoughtItems(id) {
  return `http://localhost:5000/api/bought-items/${id}`;
}

function getSoldItems(id) {
  return `http://localhost:5000/api/sold-items/${id}`;
}