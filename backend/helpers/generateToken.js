const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'Monkey inside of a cage but cant see the key';

function generateToken(user) { 

  const payload = {
    id: user.user.id,
    username: user.user.username,
    location: user.user.location,
    roles: ['admin']
  }

  const options = {
    expiresIn: '25m'
  }

  return jwt.sign(payload, secret, options);
}

module.exports = generateToken;