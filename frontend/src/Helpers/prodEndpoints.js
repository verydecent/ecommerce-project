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
  updateItem,
  updateItemImage,
  postItemImage,
}

function authorizeUser() {
  return 'https://limitless-island-76296.herokuapp.com/api/authorize-user';
}

function getLikedItems (id) {
  if (id) {
    return `https://limitless-island-76296.herokuapp.com/api/account/liked-items/${id}`;
  }
  // For post request
  return 'https://limitless-island-76296.herokuapp.com/api/account/liked-items';
};

function getItems(id) {
  if (id) {
    return `https://limitless-island-76296.herokuapp.com/api/items/${id}`
  }
  // For multiple items vs 1 item
  return 'https://limitless-island-76296.herokuapp.com/api/items';
}

function getStoreByUsername(username) {
  return `https://limitless-island-76296.herokuapp.com/api/store/${username}`
}

function getUser(id) {
  return `https://limitless-island-76296.herokuapp.com/api/users/${id}`
}

function purchaseItem(id) {
  return `https://limitless-island-76296.herokuapp.com/api/purchase-item/${id}`;
}

function getBoughtItems(id) {
  return `https://limitless-island-76296.herokuapp.com/api/user/${id}/bought-items`;
}

function getSoldItems(id) {
  return `https://limitless-island-76296.herokuapp.com/api/user/${id}/sold-items`;
}

function postFeedback() {
  return `https://limitless-island-76296.herokuapp.com/api/account/post-feedback`;
}

function checkFeedback() {
  return `https://limitless-island-76296.herokuapp.com/api/account/check-feedback/`
}

function getFeedback(id) {
  return `https://limitless-island-76296.herokuapp.com/api/account/get-feedback/${id}`
}

function getFeedbackByUsername(username) {
  return `https://limitless-island-76296.herokuapp.com/api/store/feedback/${username}`;
}

function postItem(id) {
  return `https://limitless-island-76296.herokuapp.com/api/account/post-item/${id}`
}

function updateItem(id) {
  return `https://limitless-island-76296.herokuapp.com/api/account/update-item/${id}`;
}

function registerUser() {
  return 'https://limitless-island-76296.herokuapp.com/api/auth/register';
}

function loginUser() {
  return 'https://limitless-island-76296.herokuapp.com/api/auth/login';
}

function messageUser() {
  return `https://limitless-island-76296.herokuapp.com/api/messages`;
}

function getBuyingChat(id) {
  return `https://limitless-island-76296.herokuapp.com/api/messages/buying/${id}`;
}

function getSellingChat(id) {
  return `https://limitless-island-76296.herokuapp.com/api/messages/selling/${id}`;
}

function getChatMessages(chat_id) {
  return `https://limitless-island-76296.herokuapp.com/api/messages/${chat_id}`;
}

function getAccountStore(id) {
  return `https://limitless-island-76296.herokuapp.com/api/account/store/${id}`;
}

function updateUserInfo() {
  return `https://limitless-island-76296.herokuapp.com/api/account/settings/update/user-info`;
}

function updateUserPassword() {
  return `https://limitless-island-76296.herokuapp.com/api/account/settings/update/user-password`;
}

function uploadUserPicture(user_id) {
  return `https://limitless-island-76296.herokuapp.com/api/account/upload-user-picture/${user_id}`;
}

function getUserPicture(user_id) {
  return `https://limitless-island-76296.herokuapp.com/api/account/get-user-picture/${user_id}`;
}

function updateItemImage(id) {
  return `https://limitless-island-76296.herokuapp.com/api/account/update-item/image/${id}`
}

function postItemImage() {
  return `https://limitless-island-76296.herokuapp.com/api/account/post-item/image/`

}