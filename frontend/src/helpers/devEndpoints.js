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
  getBuyingChat,
  getSellingChat,
  getChatMessages,
  getAccountStore,
  updateUserInfo,
  updateUserPassword,
  uploadUserPicture,
  getUserPicture,
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

function postItem(id) {
  return `http://localhost:5000/api/account/post-item/${id}`
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

function getBuyingChat(id) {
  return `http://localhost:5000/api/messages/buying/${id}`;
}

function getSellingChat(id) {
  return `http://localhost:5000/api/messages/selling/${id}`;
}

function getChatMessages(chat_id) {
  return `http://localhost:5000/api/messages/${chat_id}`;
}

function getAccountStore(id) {
  return `http://localhost:5000/api/account/store/${id}`;
}

function updateUserInfo() {
  return `http://localhost:5000/api/account/settings/update/user-info`;
}

function updateUserPassword() {
  return `http://localhost:5000/api/account/settings/update/user-password`;
}

function uploadUserPicture(user_id) {
  return `http://localhost:5000/api/account/upload-user-picture/${user_id}`;
}

function getUserPicture(user_id) {
  return `http://localhost:5000/api/account/get-user-picture/${user_id}`;
}