module.exports = {
  authorizeUser,
  getLikedItems,
  getItems,
  getUser,
  getUserByUsername,
  purchaseItem,
  getBoughtItems,
  getSoldItems,
  postFeedback,
  checkFeedback,
  getFeedback,
  postItem,
  registerUser,
  loginUser,
}

function authorizeUser() {
  return 'http://localhost:5000/api/authorize-user';
}

function getLikedItems (id) {
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

function getUserByUsername(username) {
  return `http://localhost:5000/api/user/${username}`
}

function getUser(id) {
  return `http://localhost:5000/api/users/${id}`
}

function purchaseItem(id) {
  return `http://localhost:5000/api/purchase-item/${id}`;
}

function getBoughtItems(id) {
  return `http://localhost:5000/api/user/${id}/bought-items`;
}

function getSoldItems(id) {
  return `http://localhost:5000/api/user/${id}/sold-items`;
}

function postFeedback() {
  return `http://localhost:5000/api/account/post-feedback`;
}

function checkFeedback() {
  return `http://localhost:5000/api/account/check-feedback/`
}

function getFeedback(id) {
  return `http://localhost:5000/api/account/get-feedback/${id}`
}

function postItem() {
  return `http://localhost:5000/api/account/post-item`
}

function registerUser() {
  return 'http://localhost:5000/api/auth/register';
}

function loginUser() {
  return 'http://localhost:5000/api/auth/login';
}