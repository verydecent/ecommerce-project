module.exports = {
  likedItems,
}

function likedItems (id) {
  return `http://localhost:5000/api/account/liked-items/${id}`;
};
