const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'Monkey inside of a cage but cant see the key';

function generateToken({ user }) { 

  const payload = {
    id: user.id,
    username: user.username,
    location: user.location,
    email: user.email,
    roles: ['admin']
  }

  const options = {
    expiresIn: '40m'
  }

  return jwt.sign(payload, secret, options);
}

module.exports = generateToken;