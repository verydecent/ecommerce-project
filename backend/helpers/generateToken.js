const jwt = require('jsonwebtoken');

function generateToken(user) {

  const payload = {
    subject: user.id,
    username: user.username,
    roles: ['admin']
  }

  const options = {
    expiresIn: '15m'
  }

  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.export = tokenGenerator;