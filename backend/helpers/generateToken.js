const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'Monkey inside of a cage but cant see the key';

function generateToken(stuff) { 

  const payload = {
    id: stuff.user.id,
    username: stuff.user.username,
    userItems: stuff.userItems,
    roles: ['admin']
  }

  const options = {
    expiresIn: '15m'
  }

  return jwt.sign(payload, secret, options);
}

module.exports = generateToken;