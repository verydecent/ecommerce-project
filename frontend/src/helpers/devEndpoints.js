module.exports = {
  authorizeUser,
  getLikedItems,
  getItems,
  getStoreByUsername,
  getUser,
  purchaseItem,
  getBoughtItems,
  getSoldItems,
  postFeedback,
  checkFeedback,
  getFeedbackByUsername,
  getFeedback,
  postItem,
  registerUser,
  loginUser,
  messageUser,
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

function getStoreByUsername(username) {
  return `http://localhost:5000/api/store/${username}`
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

function getFeedbackByUsername(username) {
  return `http://localhost:5000/api/store/feedback/${username}`;
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

function messageUser() {
  return `http://localhost:5000/api/messages`;
}